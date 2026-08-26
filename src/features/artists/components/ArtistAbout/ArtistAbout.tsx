//css
import './ArtistAbout.scss'
//type
import type { ArtistData } from '../../../../data/type'
//imagens
import ImgArrow from '../../assets/ImgArrow'
import { useParams } from 'react-router-dom'

type Props = {
    artistData: ArtistData
}

function ArtistAbout({ artistData }: Props) {
    const faceSquareSrc = `${import.meta.env.BASE_URL}pasta/${artistData.idImgs}/square-face.webp` 
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
                                        src="https://braziljournal.com/wp-content/uploads/2022/06/4d0aac07-950e-a8e0-0238-282cc0e77e75-857x482.jpg.webp"
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
            <div className='wraper-btn-view'>
                <button className='btn-view'>
                    <p>Ver menos</p>
                    <ImgArrow />
                </button>
            </div>
        </section>
    )
}

export default ArtistAbout