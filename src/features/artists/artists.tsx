import './Artists.scss'
//componentes
import HeaderNav from '../../shared/components/HeaderNav/HeaderNav'
import ArtistsGrid from './components/ArtistsGrid'
import FeaturesSection from './components/FeaturesSection'
import Footer from '../../shared/components/Footer/Footer'
import IntroPage from '../../shared/components/IntroPage'


function Artists() {
    const contentIntro = {
        title: "Explore artistas de A a Z",
        description: "Conheça e valorize a história, a cultura e o impacto de grandes artistas negros."
    }
    return (
        <main className="artists">
            <HeaderNav showLine />
            <IntroPage
                title={contentIntro.title}
                description={contentIntro.description}
            />
            <ArtistsGrid />
            <FeaturesSection />
            <Footer/>
        </main>
    )
}

export default Artists