import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const ChildrenButton = ({ children }: Props) => (
    <>{children}</>
)
