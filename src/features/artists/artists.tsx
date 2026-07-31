import './artists.scss'
//componentes
import HeaderNav from '../../shared/components/headerNav/headerNav'
import ArtistsGrid from './components/AristisGrid/ArtistsGrid'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import Footer from '../../shared/components/Footer/Footer'
import ArtistsDescription from './components/ArtistsDescription/ArtistsDescription'

function Artists() {
    return (
        <main className="artists">
            <HeaderNav showLine />
            <ArtistsDescription/>
            <ArtistsGrid />
            <FeaturesSection />
            <Footer />
        </main>
    )
}

export default Artists