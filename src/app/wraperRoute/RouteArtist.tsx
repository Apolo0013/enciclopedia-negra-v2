import type { ReactNode } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { alfabeto } from "../../data/type";
//base URL
const baseURL = import.meta.env.BASE_URL

interface wrapperRouteGuard {
    children: ReactNode
}

function RouteArtist({ children }: wrapperRouteGuard) {
    const nv = useNavigate()
    const { letra } = useParams()
    if (!letra || !alfabeto.some(_letra => letra == _letra)) {
        nv(`${baseURL}artists`)
        return <Navigate to={`${baseURL}artists`} />
    }
    alert("passou")
    return children
}

export default RouteArtist