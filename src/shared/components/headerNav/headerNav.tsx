import './headerNav.scss'
//Imagem
import ImgSearch from '../../assets/Search'

function HeaderNav() {
    return (
        <header className="header-nav">
            <h2>ENCICLOPÉDIA NEGRA</h2>
            <nav className='nav-main'>
                <ul>
                    <li>Inicio</li>
                    <li>Artista</li>
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