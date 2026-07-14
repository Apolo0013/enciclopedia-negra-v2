import './home.scss'
//components HOME
import BackgroundHome from './components/backgroundHome/backgroundHome'
import ContentHome from './components/contentHome/contentHome'
//Shared
import HeaderNav from '../../shared/components/headerNav/headerNav'

function Home() {
    return (
        <main className="home">
            <BackgroundHome />
            <HeaderNav/>
            <ContentHome/>
        </main>
    )
}

export default Home