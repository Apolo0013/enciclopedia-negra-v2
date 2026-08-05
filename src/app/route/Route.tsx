import { createBrowserRouter, Navigate } from "react-router-dom";
//Pages
import Home from "../../features/home/Home";
import Artists from "../../features/artists/Artists";
import AboutUs from "../../features/aboutUs/AboutUs";

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
        element: <Artists />
    },
    {
        path: "/about-us",
        element: <AboutUs />
    }
])