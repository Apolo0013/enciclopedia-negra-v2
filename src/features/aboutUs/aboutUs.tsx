import './aboutUs.scss'
//componente
import HeaderNav from '../../shared/components/headerNav/headerNav'
import MyTeam from './components/MyTeam/Myteam'
import Project from './components/Project/Project'
//imagens


function AboutUs() {
    return (
        <main className='about-us'>
            <HeaderNav showLine/>
            <div className="content">
                <MyTeam />
                <Project />
            </div>
        </main>
    )
}   

export default AboutUs