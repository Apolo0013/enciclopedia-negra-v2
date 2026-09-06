import './ArtistProfile.scss'
//type
import type { ArtistData } from '../../../../data/type'
//base url
const baseURL = import.meta.env.BASE_URL

type Props = {
    artistData: ArtistData
}

function ArtistProfile({ artistData }: Props) {
    const faceSquareSrc = `${baseURL}pasta/${artistData.idImgs}/square-face.webp`
    return (
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
    )
}

export default ArtistProfile