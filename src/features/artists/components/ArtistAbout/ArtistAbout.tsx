//css
import './ArtistAbout.scss'
//type
import type { ArtistData } from '../../../../data/type'
//imagens
import ImgArrow from '../../assets/ImgArrow'
//hook
import { useState } from 'react'
//componentes
import ArtistProfile from '../ArtistProfile'
import ArtistContentWork from '../ArtistContentWork'

type Props = {
    artistData: ArtistData
}
///Enciclopedia-Negra/pasta/Chica-Xavier-a5fea2bd-467d-4c42-ae19-b774261ed3ff/work-number-1.webp
function ArtistAbout({ artistData }: Props) {
    //state
    const [view, setview] = useState<boolean>(false)
    return (
        <section className='artist-about'>
            <ArtistProfile
                artistData={artistData}
            />
            {
                view 
                    ? <ArtistContentWork
                        artistData={artistData}
                    />
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