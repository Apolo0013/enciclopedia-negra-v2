import { useParams } from 'react-router-dom'
import './ArtistPage.scss'
//componentes
import HeaderNav from '../../../../shared/components/HeaderNav'
import ArtistDetails from '../../components/ArtistDetails'
import FeaturesSection from '../../components/FeaturesSection'
import Footer from '../../../../shared/components/Footer'

function ArtistsPage() {
    const { letra } = useParams()
    console.log(letra)
    return (
        <main className='artist-page'>
            <HeaderNav showLine />
            <ArtistDetails />
            <FeaturesSection />
            <Footer />
        </main>
    )
}

export default ArtistsPage