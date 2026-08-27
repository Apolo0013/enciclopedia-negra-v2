import './MenuDesktop.scss'
//Imagem
import ImgSearch from '../../assets/Search'
//hook
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
//base url
const baseURL = import.meta.env.BASE_URL


function MenuDesktop() {
    const location = useLocation()
    type namesPages = "home" | "artists" | "about-us"

    const namePage = location.pathname.split('/')[1] as namesPages

    const nav = useNavigate()
    return (
        <nav className='nav-main'>
            <ul>
                <li
                    className={namePage == "home" ? 'active-rota' : ''}
                    onClick={() => nav(baseURL+'home')}
                >
                    Inicio
                </li>
                <li
                    className={namePage == 'artists' ? 'active-rota' : ''}
                    onClick={() => nav(baseURL+'artists')}
                >
                    Artista
                </li>
                <li
                    className={namePage == "about-us" ? 'active-rota' : ""}
                    onClick={() => nav(baseURL+'about-us')}
                >
                    Sobre Nos
                </li>
                <li>
                    <ImgSearch/>
                </li>
            </ul>
        </nav>
    )
}

export default MenuDesktop