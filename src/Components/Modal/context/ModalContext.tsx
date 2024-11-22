import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ModalContextType {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}

interface ModalContextProps {
    children: ReactNode;
}

const ModalContext = createContext<ModalContextType>({
    state: false,
    setState: () => null
});


const ModalProvider = ({ children }: ModalContextProps) => {
    const [state, setState] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ state, setState }}>
            {children}
        </ModalContext.Provider>
    )
}



export {
    ModalContext,
    ModalProvider
}
