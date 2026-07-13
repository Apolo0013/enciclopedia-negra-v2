import BackgroundHome from './components/backgroundHome/backgroundHome'
import ContentHome from './components/contentHome/contentHome'
import './home.scss'

function Home() {
    return (
        <main className="home">
            <BackgroundHome />
            <ContentHome/>
        </main>
    )
}

export default Home