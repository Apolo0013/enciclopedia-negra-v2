import './ArtistDetails.scss'
//imagens
import ImgArrow from '../../assets/ImgArrow'
//hook
import { useParams } from 'react-router-dom'
//data
import data from '../../../../data'
import {type Alfabeto} from '../../../../data/type'
//component
import ArtistAbout from '../ArtistAbout/ArtistAbout'

function ArtistDetails() {
    const { letra } = useParams()
    if (!letra) return
    //pegar dados do artista
    const chave = letra as Alfabeto
    const dados = data[chave]
    console.log(dados)
    return (
        <section className='artist-details'>
            <div className='artist-nav'>
                <p>Inicio</p>
                <div className='artist-nav-img'>
                    <ImgArrow />
                </div>
                <p>Artistas</p>
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