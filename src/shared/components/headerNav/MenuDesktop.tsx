import './MenuDesktop.scss'
//Imagem
import ImgSearch from '../../assets/Search'
//hook
import { useNavigate } from 'react-router-dom'

function MenuDesktop() {
    const nav = useNavigate()
    return (
        <nav className='nav-main'>
            <ul>
                <li
                    onClick={() => nav('/home')}
                >
                    Inicio
                </li>
                <li
                    onClick={() => nav('/artists')}
                >
                    Artista
                </li>
                <li
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