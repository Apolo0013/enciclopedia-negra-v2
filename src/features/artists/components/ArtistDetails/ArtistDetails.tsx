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

function ArtistDetails() {
    //hook route, para pegar parametros
    const {
        letra
    } = useParams()
    const nv = useNavigate()
    //pegar dados do artista
    const chave = letra as Alfabeto
    const dados = data[chave]
    return (
        <section className='artist-details'>
            <div className='artist-nav'>
                <p
                    onClick={() => nv("home")}
                >Inicio</p>
                <div className='artist-nav-img'>
                    <ImgArrow />
                </div>
                <p
                    onClick={() => nv("artists")}
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