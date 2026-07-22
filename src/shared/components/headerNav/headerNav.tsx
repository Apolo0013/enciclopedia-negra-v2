import './headerNav.scss'
//Imagem
import ImgSearch from '../../assets/Search'
import { useNavigate } from 'react-router-dom'

type Props = {
    showLine?: boolean,
    posAbsolute?: boolean
}

function HeaderNav({
    showLine = false,
    posAbsolute = false
}: Props) {
    const nav = useNavigate()
    return (
        <header
            className="header-nav"
            style={{
                position: posAbsolute ? 'absolute' : 'relative'
            }}
        >
            <div className='header-nav-icon'>
                <h2>ENCICLOPÉDIA NEGRA</h2>
                { 
                    showLine 
                        ?  <div className="line-icon">
                                <div></div>
                            </div>
                        : null
                }
            </div>
            <nav className='nav-main'>
                <ul>
                    <li>Inicio</li>
                    <li
                        onClick={() => nav('/artists')}
                    >Artista</li>
                    <li>Sobre Nos</li>
                    <li>
                        <ImgSearch/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav