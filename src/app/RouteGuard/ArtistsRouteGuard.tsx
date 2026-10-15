import { Navigate, useNavigate, useParams } from "react-router-dom";
import { alfabeto } from "../../data/type";
import type { TypeRouteGuard } from "./type";
//base URL
const baseURL = import.meta.env.BASE_URL



function ArtistRouteGuard({ children }: TypeRouteGuard) {
    const nv = useNavigate()
    const { letra } = useParams()
    if (!letra || !alfabeto.some(_letra => letra == _letra)) {
        nv(`${baseURL}artists`)
        return <Navigate to={`${baseURL}artists`} />
    }
    return children
}

export default ArtistRouteGuard