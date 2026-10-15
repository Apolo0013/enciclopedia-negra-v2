import { createBrowserRouter, Navigate } from "react-router-dom";
//Pages
import Home from "../../features/home/Home";
import Artists from "../../features/artists/Artists";
import ArtistPage from "../../features/artists/pages/ArtistPage";
import AboutUs from "../../features/aboutUs/AboutUs";
import Search from "../../features/search/Search";
import NotFound from "../../shared/components/NotFound";

const baseURL = import.meta.env.BASE_URL

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={'/home'} replace/>
    },
    {
        path: `/home`,
        element: <Home />
    },
    {
        path: `/artists`,
        element: <Artists />
    },
    {
        path: `/artists/:letra/:name`,
        element: <ArtistPage />
    },
    {
        path: `/artists/:letra`,
        element: <ArtistPage />
    },
    {
        path: `/about-us`,
        element: <AboutUs />
    },
    {
        path: `/search`,
        element: <Search />
    },
    {
        path: "*",
        element: <NotFound/>
    }
],
    {
        basename: baseURL
    }
)