import { KeyboardEvent, MouseEvent, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./context/UseModalContext";
import "./Modal.css";

interface ModalProps {
    children: ReactNode;
}

const eventListener = "keydown";

export const Modal = ({ children }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const modalRoot = document.getElementById("modal");
    const { state, setState } = useModalContext();

    const closeModal = () => setState(false);
    const handleContentClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setState(false);
            }
        }
        if (state) document.addEventListener(eventListener, handleEsc as unknown as EventListener);
        return () => document.removeEventListener(eventListener, handleEsc as unknown as EventListener);
    }, [state, setState]);

    if (!state || !modalRoot) {
        return null;
    }

    return createPortal(
        <div className={`overlay ${state ? "show" : ""}`} onClick={closeModal}>
            <div className={`modal ${state ? "show" : ""}`} ref={modalRef} onClick={handleContentClick}>
                {children}
                <button type="button" className="close-button" onClick={closeModal}>Close</button>
            </div>
        </div>,
        modalRoot)
}
