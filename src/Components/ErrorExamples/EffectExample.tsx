import { useEffect } from "react"

export const EffectExample = () => {
    useEffect(() => {
        throw new Error("Ups");

    }, []);

    return (
        <span>Hello</span>
    )
}
