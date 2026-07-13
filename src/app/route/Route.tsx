import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../../features/home/home";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <Navigate to="/" replace/>
    },
    {
        path: "/",
        element: <Navigate to="/home" replace/>
    },
    {
        path: "/home",
        element: <Home />
    }
])