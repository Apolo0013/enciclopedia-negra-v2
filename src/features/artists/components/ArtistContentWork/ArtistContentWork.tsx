//css
import './ArtistContentWork.scss'
//type
import type { ArtistData } from '../../../../data/type'
//base URL
const baseURL = import.meta.env.BASE_URL

type Props = {
    artistData: ArtistData
}

function ArtistContentWork({ artistData }: Props) {
    return (
        <>
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
    )
}

export default ArtistContentWork