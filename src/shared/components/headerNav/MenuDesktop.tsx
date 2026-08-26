import './MenuDesktop.scss'
//Imagem
import ImgSearch from '../../assets/Search'
//hook
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


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
                    onClick={() => nav('/home')}
                >
                    Inicio
                </li>
                <li
                    className={namePage == 'artists' ? 'active-rota' : ''}
                    onClick={() => nav('/artists')}
                >
                    Artista
                </li>
                <li
                    className={namePage == "about-us" ? 'active-rota' : ""}
                    onClick={() => nav('/about-us')}
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