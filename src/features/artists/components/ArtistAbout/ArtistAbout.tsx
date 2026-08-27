//css
import './ArtistAbout.scss'
//type
import type { ArtistData } from '../../../../data/type'
//imagens
import ImgArrow from '../../assets/ImgArrow'
import { useState } from 'react'
//base url
const baseURL = import.meta.env.BASE_URL

type Props = {
    artistData: ArtistData
}
///Enciclopedia-Negra/pasta/Chica-Xavier-a5fea2bd-467d-4c42-ae19-b774261ed3ff/work-number-1.webp
function ArtistAbout({ artistData }: Props) {
    const faceSquareSrc = `${baseURL}pasta/${artistData.idImgs}/square-face.webp`
    //state
    const [view, setview] = useState<boolean>(false)
    return (
        <section className='artist-about'>
            <div className='artist-profile'>
                <img
                    className='artist-profile-img'
                    src={faceSquareSrc}
                    alt="Imagem do Artista"
                />
                <div className='artist-profile-info'>
                    <h1 className='artist-profile-name' >{artistData.name}</h1>
                    <div className="artist-profile-profession">
                        {
                            artistData.professions.map((pro, key) => (
                                <p key={key}>{pro}</p>
                            )) 
                        }
                    </div>
                    <p className='artist-profile-birth'>
                        {
                            `
                                ${artistData.age.birth} -
                                ${
                                    artistData.age.death
                                        ? artistData.age.death
                                        : "Presente"
                                }
                            `
                        }
                    </p>
                    <p className='artist-profile-description'>
                        {artistData.bio}
                    </p>
                </div>
            </div>
            {
                view 
                ? <>
                    <span className="line"></span>
                    <div className='conteiner-artist-work'>
                        {
                            artistData.works.map(({description, title}, key) => (
                                <>
                                    <div className='artist-work' key={key}>
                                        <h2 className="work-title">
                                            {title}
                                        </h2>
                                        <div className='work-content'>
                                            <img
                                                src={`${baseURL}pasta/${artistData.idImgs}/work-number-${key + 1}.webp`}
                                                alt="Imagem da obra"
                                            />
                                            <p className='paragraph-work'>
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="line"></span>    
                                </>
                            ))
                        }
                        <div className="legacy">
                            <h2 className="work-title">
                                Legado
                            </h2>
                            <p className='paragraph-work'>{artistData.legacy}</p>
                        </div>
                    </div>
                    </>
                    : null
            }
            <div className='wraper-btn-view'>
                <button className='btn-view'
                    onClick={() => setview(prev => !prev)}
                >
                    <p>
                        {
                            view
                                ? "Ver Menos"
                                : "Ver Mais"
                        }
                    </p>
                    <ImgArrow
                        style={{
                            transform: `rotate(${view ? 270 : 90}deg)`
                        }}
                    />
                </button>
            </div>
        </section>
    )
}

export default ArtistAbout