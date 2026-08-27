import { createBrowserRouter, Navigate } from "react-router-dom";
//Pages
import Home from "../../features/home/Home";
import Artists from "../../features/artists/Artists";
import ArtistPage from "../../features/artists/pages/ArtistPage";
import AboutUs from "../../features/aboutUs/AboutUs";

const baseURL = import.meta.env.BASE_URL
console.log(`${baseURL}artists`)

export const router = createBrowserRouter([
    {
        path: "*",
        element: <Navigate to={baseURL} replace/>
    },
    {
        path: baseURL,
        element: <Navigate to={`${baseURL}home`} replace/>
    },
    {
        path: `${baseURL}home`,
        element: <Home />
    },
    {
        path: `${baseURL}artists`,
        element: <Artists />
    },
    {
        path: `${baseURL}artists/:letra`,
        element: <ArtistPage/>
    },
    {
        path: `${baseURL}about-us`,
        element: <AboutUs />
    }
])