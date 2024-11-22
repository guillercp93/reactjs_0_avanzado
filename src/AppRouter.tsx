import { ReactNode } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "./Components"
import { PrivateGuard } from "./guard/PrivateGuard"
import { PrivateRouter } from "./private"
import { Login } from "./public/Login"

interface Props {
    children: ReactNode
}

export const AppRouter = ({ children }: Props) => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateGuard />}>
                    <Route path="/private/*" element={<PrivateRouter />} />
                </Route>
                <Route path="/404" element={<h1>Page not found!</h1>} />
                <Route path="*" element={<Navigate to="/404" />} />
            </RoutesWithNotFound>
            {children}
        </BrowserRouter>
    )
}
