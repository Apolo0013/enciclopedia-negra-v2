import './Artists.scss'
//componentes
import HeaderNav from '../../shared/components/HeaderNav/HeaderNav'
import ArtistsGrid from './components/AristisGrid'
import FeaturesSection from './components/FeaturesSection'
import Footer from '../../shared/components/Footer/Footer'
import ArtistsDescription from './components/ArtistsDescription'

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