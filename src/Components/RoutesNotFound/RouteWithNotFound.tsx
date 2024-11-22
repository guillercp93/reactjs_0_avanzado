import { ReactNode } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

interface Props {
    children: ReactNode
}

export const RoutesWithNotFound = ({ children }: Props) => {
    return (
        <Routes>
            {children}
            <Route path="/404" element={<h1>Page not found!</h1>} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    )
}
