import './MenuMobile.scss'
//Imagem
import ImgSearch from '../../assets/Search'
import ImgClose from '../../assets/close.svg'
import ImgHome from '../../assets/home.svg'
import ImgArtists from '../../assets/artists.svg'
import ImgInfo from '../../assets/info.svg'
//hook
import useHeaderNav from './useHeaderNav'
import { useNavigate } from 'react-router-dom'
//
type Props = {
    useHeaderNav: ReturnType<typeof useHeaderNav>
}

function MenuMobile({ useHeaderNav }: Props) {
    const nav = useNavigate()
    //hook
    const {
        clickMenuMobile,
        setClickMenuMobile
    } = useHeaderNav
    return (
        <div
            className="menu-mobile"
            style={{
                left: clickMenuMobile ? "0%" : "100%"
            }}
        >
            <div className='wraper-nav-mobile'>
                <div
                    className="menu-close"
                    onClick={() => setClickMenuMobile(false)}
                >
                    <img
                        src={ImgClose}
                        alt=""
                    />
                </div>
                <nav className='nav-mobile'>
                    <li
                        onClick={() => nav('/home')}
                    >
                        <img
                            src={ImgHome}
                            alt="Imagem de um casa."
                        />
                        <p>Início</p>
                    </li>
                    <div className='nav-line'></div>
                    <li
                        onClick={() => nav('/artists')}
                    >                        
                        <img
                            src={ImgArtists}
                            alt="Imagem de pessoas ou artistas"
                        />
                        <p>Artistas</p>
                    </li>
                    <div className='nav-line'></div>
                    <li
                        onClick={() => nav('/about-us')}
                    >
                        <img
                            src={ImgInfo}
                            alt="Imagem de informação"
                        />
                        <p>Sobre nós</p>
                    </li>
                    <div className='nav-line'></div>
                    <li>
                        <ImgSearch />
                        <p>Pesquisa</p>
                    </li>
                </nav>
            </div>
        </div>
    )
}

export default MenuMobile