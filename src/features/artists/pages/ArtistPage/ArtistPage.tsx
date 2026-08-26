import { useParams } from 'react-router-dom'
import './ArtistPage.scss'
//componentes
import HeaderNav from '../../../../shared/components/HeaderNav'
import ArtistDetails from '../../components/ArtistDetails'

function ArtistsPage() {
    const { letra } = useParams()
    console.log(letra)
    return (
        <main className='artist-page'>
            <HeaderNav showLine />
            <ArtistDetails />
        </main>
    )
}

export default ArtistsPage