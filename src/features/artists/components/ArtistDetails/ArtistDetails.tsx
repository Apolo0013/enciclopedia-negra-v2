import './ArtistDetails.scss'
//imagens
import ImgArrow from '../../assets/ImgArrow'
//hook
import { useNavigate, useParams } from 'react-router-dom'
//data
import data from '../../../../data'
import {type Alfabeto} from '../../../../data/type'
//component
import ArtistAbout from '../ArtistAbout'
//base URL
const baseURL = import.meta.env.BASE_URL

function ArtistDetails() {
    const { letra } = useParams()
    const nv = useNavigate()
    if (!letra) return
    //pegar dados do artista
    const chave = letra as Alfabeto
    const dados = data[chave]
    //
    return (
        <section className='artist-details'>
            <div className='artist-nav'>
                <p
                    onClick={() => nv(baseURL+"home")}
                >Inicio</p>
                <div className='artist-nav-img'>
                    <ImgArrow />
                </div>
                <p
                    onClick={() => nv(baseURL+"artists")}
                >Artistas</p>
                <div className='artist-nav-img'>
                    <ImgArrow />
                </div>
                <p>{letra?.toUpperCase()}</p>
            </div>
            <div className='w-auto h-auto flex flex-col gap-8'>
                {
                    dados.map((data, key) => (
                        <ArtistAbout
                            artistData={data}
                            key={key}
                        />
                    ))
                }    
            </div>
        </section>
    )
}

export default ArtistDetails