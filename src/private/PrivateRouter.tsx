import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "@/Components";
import { About } from "./About";
import { DashBoard } from "./Dashboard";
import { User } from "./User";

export const PrivateRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
        </RoutesWithNotFound>
    );
}
