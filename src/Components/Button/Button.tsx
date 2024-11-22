import { ReactNode, useEffect } from "react"
import { useGlobalContext } from "../../Context/global.context"
import "./Button.css"

interface Props {
    children: ReactNode
    parentMethod: () => void
}

interface ChildrenProps {
    children: ReactNode
}

export const Button = ({ children, parentMethod }: Props) => {
    useEffect(() => console.debug("Cambio el label"), [children])
    const { setValue } = useGlobalContext();

    const handleClick = () => {
        parentMethod();
        setValue(value => value + 1);
    }

    return (
        <button type="button" className="custom-button" onClick={handleClick}>
            {children}
        </button>
    )
}

export const ColorRed = ({ children }: ChildrenProps) => {
    const { value } = useGlobalContext();
    return (
        <div className="color-red">
            <p>The color inside the context is: {value}</p>
            {children}
        </div>
    )
}
