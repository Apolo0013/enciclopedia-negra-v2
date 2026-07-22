import './CardArtist.scss'
//imagens
import ImgArrow from '../../assets/ImgArrow.tsx'

type Props = {
    letra: string
}

function CardArtist({letra}: Props) {
    return (
        <div className="card-artist">
            <h2 className='card-artist-letra'>{letra}</h2>
            <button className='card-artist-btn'>
                <p>Ver Artista</p>
                <ImgArrow/>
            </button>
        </div>
    )
}

export default CardArtist