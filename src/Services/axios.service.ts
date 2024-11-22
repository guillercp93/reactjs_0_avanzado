import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "../Utilities";

export let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
    axiosInstance = axios.create({ baseURL });
}

const setupInterceptors = () => {
    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            config.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            console.debug(`Request made to: ${config.url}`);
            return config;
        },
        (error: Error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            console.debug(
                `Response from: ${response.config.url}`,
                { data: response.data, status: response.status }
            );
            return response;
        },
        (error) => {
            if (error.response) {
                console.error(`Error response from: ${error.response.config.url}`)
            }

            return Promise.reject(error);
        }
    );
}

export const initAxios = () => {
    createAxios(BASE_URL);
    setupInterceptors();
}
