import './ArtistPage.scss'
//componentes
import HeaderNav from '../../../../shared/components/HeaderNav'
import ArtistDetails from '../../components/ArtistDetails'
import FeaturesSection from '../../components/FeaturesSection'
import Footer from '../../../../shared/components/Footer'
//guard route
import RouteArtist from '../../../../app/wraperRoute/RouteArtist'

function ArtistsPage() {
    return (
        <RouteArtist>
            <main
            className='artist-page'
            >
                <HeaderNav showLine />
                <ArtistDetails />
                <FeaturesSection />
                <Footer />
            </main>
        </RouteArtist>
    )
}

export default ArtistsPage