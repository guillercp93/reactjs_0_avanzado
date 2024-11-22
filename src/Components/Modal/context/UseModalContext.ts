import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("ModalContext must be used within a ModalContextProvider");
    }

    return context;
}
