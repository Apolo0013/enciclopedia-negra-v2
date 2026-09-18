import './SearchCard.scss'
//Imagens
import ImgArrowTail from '../../../../shared/assets/ImgArrowTail'
import type { ArtistData } from '../../../../data/type'
import { useNavigate } from 'react-router-dom'
import useSearchCard from '../../hook/useSearchCard'
import { useEffect } from 'react'
//base URL
const baseURL = import.meta.env.BASE_URL

type Props = {
    artistData: ArtistData
}

function SearchCard({ artistData }: Props) {
    const {
        name,
        professions,
        idImgs,
        letter
    } = artistData
    const routeArtist = `${baseURL}artists/${letter}/${name}`
    //hook
    const {
        refProfGrade,
        ScrollAnimation
    } = useSearchCard()
    const nv = useNavigate()
    //
    useEffect(() => {
        ScrollAnimation()
    }, [])
    return (
        <div className="card-artist-search">
            <div className="shadow-background"></div>
            <img
                src={`${baseURL}pasta/${idImgs}/rect-face.webp`}
                alt="Imagem do artista"
            />
            <div className="artist-result-info">
                <h2 className='artist-result-name'>{name}</h2>
                <div className='artist-result-professions'>
                    <span></span>
                    <div
                        className='professions-grade'
                        ref={refProfGrade}
                    >
                        {
                            professions.map((p, key) => (
                                <p key={key}>{p}</p>
                            ))
                        }
                        <p>{professions[0]}</p>
                    </div>
                    <button
                        className='go-to-artist'
                        onClick={() => {
                            nv(routeArtist)
                        }}
                    >
                        <ImgArrowTail />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchCard