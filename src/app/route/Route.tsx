import { createBrowserRouter, Navigate } from "react-router-dom";
//Pages
import Home from "../../features/home/home";
import Artists from "../../features/artists/artists";

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
    },
    {
        path: "/artists",
        element: <Artists/>
    }
])