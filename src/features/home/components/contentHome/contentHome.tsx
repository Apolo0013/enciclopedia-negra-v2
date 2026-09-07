//hook
import { useNavigate } from 'react-router-dom'
//css
import './ContentHome.scss'
//base URL
const baseURL = import.meta.env.BASE_URL

function ContentHome() {
    const nv = useNavigate()
    return (
        <section className='content-home'>
            <h1>ENCICLOPÉDIA NEGRA</h1>
            <p>Um espaço para descobrir artistas negros de A a Z.
                Histórias, obras e representatividade em um só lugar.</p>
            <button
                className='btn-show-artist'
                onClick={() => nv(baseURL+"artists")}
            >Explorar Agora</button>
        </section>
    )
}

export default ContentHome