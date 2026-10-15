import './ArtistPage.scss'
//componentes
import HeaderNav from '../../../../shared/components/HeaderNav'
import ArtistDetails from '../../components/ArtistDetails'
import FeaturesSection from '../../components/FeaturesSection'
import Footer from '../../../../shared/components/Footer'
//guard route
import ArtistsRouteGuard from '../../../../app/RouteGuard/ArtistsRouteGuard'

function ArtistsPage() {
    return (
        <ArtistsRouteGuard>
            <main
            className='artist-page'
            >
                <HeaderNav showLine />
                <ArtistDetails />
                <FeaturesSection />
                <Footer />
            </main>
        </ArtistsRouteGuard>
    )
}

export default ArtistsPage