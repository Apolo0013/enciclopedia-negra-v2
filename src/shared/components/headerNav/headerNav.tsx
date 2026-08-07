import './HeaderNav.scss'
//imagem
import ImgBurgerMenu from '../../assets/menu-burger.svg'
//componente
import MenuMobile from './MenuMobile'
import MenuDesktop from './MenuDesktop'
import useHeaderNav from './useHeaderNav'

type Props = {
    showLine?: boolean,
    posAbsolute?: boolean
}

function HeaderNav({
    showLine = false,
    posAbsolute = false
}: Props) {
    //hook
    const header = useHeaderNav()
    const {
        isMobile,
        setClickMenuMobile
    } = header

    return (
        <>
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
                {
                    !isMobile
                        ? <MenuDesktop/>
                        : <div className='menu-burger'
                            onClick={() => {
                                setClickMenuMobile(prev => !prev)
                            }}
                        >
                            <img
                                src={ImgBurgerMenu}
                                alt="Menu burger"
                            />
                        </div>
                }
            </header>
            {
                isMobile
                    ? <MenuMobile useHeaderNav={header} />                    
                    : null
            }
        </>
    )
}

export default HeaderNav