//css
import './ArtistAbout.scss'
//type
import type { ArtistData } from '../../../../data/type'
//imagens
import ImgArrow from '../../assets/ImgArrow'
//hook
import { useEffect, useState } from 'react'
//componentes
import ArtistProfile from '../ArtistProfile'
import ArtistContentWork from '../ArtistContentWork'
import { useParams } from 'react-router-dom'
import useArtistPage from '../../hook/useArtistPage'

type Props = {
    artistData: ArtistData
}
///Enciclopedia-Negra/pasta/Chica-Xavier-a5fea2bd-467d-4c42-ae19-b774261ed3ff/work-number-1.webp
function ArtistAbout({
    artistData,
}: Props) {
    const { name } = useParams()
    //hook
    const {
        refSectionTarget,
        ScrollToArtist
    } = useArtistPage()
    //state
    const [view, setview] = useState<boolean>(false)
    const dataName = artistData.name
    useEffect(() => {
        ScrollToArtist()
    }, [refSectionTarget])
    return (
        <section
            ref={artistData.name == name ? refSectionTarget : null}
            className='artist-about'
            data-name={dataName}
        >
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