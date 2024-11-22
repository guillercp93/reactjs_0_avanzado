import { useCallback, useEffect, useState } from "react";
import { UseApiCall } from "../Interfaces";

type UseApiOptions<P> = {
    autoFetch?: boolean;
    params: P
}
type Data<T> = T | null;
type CustomError = Error | null;

interface UseApiResult<T, P> {
    loading: boolean;
    data: Data<T>;
    error: CustomError;
    reFetch: (param: P) => void;
}

export const useApi = <T, P,>(apiCall: (param: P) => UseApiCall<T>, options?: UseApiOptions<P>): UseApiResult<T, P> => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<CustomError>(null)

    const reFetch = useCallback((param: P) => {
        const { call, controller } = apiCall(param);
        setLoading(true);

        call.then((response) => {
            setData(response.data);
            setError(null);
        }).catch((err) => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
        return () => controller.abort()
    }, [apiCall])

    useEffect(() => {
        if (options?.autoFetch) {
            return reFetch(options.params);
        }

    }, [reFetch, options?.autoFetch, options?.params])

    return { loading, data, error, reFetch }
}