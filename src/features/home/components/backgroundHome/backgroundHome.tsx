import './backgroundHome.scss'
//imagem
import ImgFundo from './1.webp'

function BackgroundHome() {
    return (
        <div className='background-home'>
            <img
                src={ImgFundo}
                alt="Imagem de fundo"
            />
        </div>
    )
}

export default BackgroundHome