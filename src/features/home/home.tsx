import './home.scss'
//components HOME
import BackgroundHome from './components/backgroundHome'
import ContentHome from './components/contentHome'
//Shared
import HeaderNav from '../../shared/components/HeaderNav'

function Home() {
    return (
        <main className="home">
            <BackgroundHome />
            <HeaderNav posAbsolute/>
            <ContentHome/>
        </main>
    )
}

export default Home