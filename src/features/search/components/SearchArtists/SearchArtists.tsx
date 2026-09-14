import './SearchArtists.scss'
//Imagens
import ImgArrowTail from '../../../../shared/assets/ImgArrowTail'
import data from '../../../../data'
//base URL
const baseURL = import.meta.env.BASE_URL

function SearchArtists() {
    const list = Object.values(data).flatMap(x => x)
    return (
        <div className='artists-results-search'>
            {
                list.map(({name, professions, idImgs}) => (
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
                                <p>{professions[0]}</p>
                                <button className='go-to-artist'>
                                    <ImgArrowTail />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SearchArtists