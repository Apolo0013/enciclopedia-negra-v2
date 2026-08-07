import './Home.scss'
//components HOME
import BackgroundHome from './components/BackgroundHome'
import ContentHome from './components/ContentHome'
//Shared
import HeaderNav from '../../shared/components/HeaderNav'

function Home() {
    return (
        <main className="home">
            <BackgroundHome />
            <HeaderNav />
            <ContentHome />
        </main>
    )
}

export default Home