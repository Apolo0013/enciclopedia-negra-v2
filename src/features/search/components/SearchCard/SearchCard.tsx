import './SearchCard.scss'
//Imagens
import ImgArrowTail from '../../../../shared/assets/ImgArrowTail'
//imagens
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
///componentes
import useSearchCard from '../../hook/useSearchCard'
import type { ArtistData } from '../../../../data/type'
import useMediaQuery from '../../../../shared/hook/useMediaQuery'
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
    //se trata de uma funcao simples
    const DirectToArtist = () => nv(routeArtist)
    //hook
    const {
        refProfGrade,
        ScrollAnimation
    } = useSearchCard()
    const nv = useNavigate()
    //Responsividade
    const isDown768px = useMediaQuery("(max-width: 768px)")
    //
    useEffect(() => {
        ScrollAnimation()
    }, [])
    return (
        <div
            className={`card-artist-search ${isDown768px ? "layout-adpitive-card" : ""}`}
            //mobile ele podera clica no card memo pra se redirecionado pra la
            onClick={() => {
                if (isDown768px) DirectToArtist()
            }}
        >
            <div className="shadow-background"></div>
            <img
                className='card-back-img'
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
                        onClick={() => DirectToArtist()}
                    >
                        <ImgArrowTail />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchCard