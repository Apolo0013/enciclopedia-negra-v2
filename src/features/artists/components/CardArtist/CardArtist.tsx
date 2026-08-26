import './CardArtist.scss'
//imagens
import ImgArrow from '../../assets/ImgArrowTail.tsx'
import { useNavigate } from 'react-router-dom'

type Props = {
    letra: string
}

function CardArtist({ letra }: Props) {
    const nv = useNavigate()
    return (
        <div className="card-artist">
            <h2 className='card-artist-letra'>{letra}</h2>
            <button
                className='card-artist-btn'
                onClick={() => nv('/artists/'+letra)}
            >
                <p>Ver Artista</p>
                <ImgArrow/>
            </button>
        </div>
    )
}

export default CardArtist