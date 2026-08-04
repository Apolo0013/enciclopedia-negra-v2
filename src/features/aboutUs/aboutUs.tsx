import './aboutUs.scss'
//componente
import HeaderNav from '../../shared/components/headerNav/headerNav'
import MyTeam from './components/MyTeam/Myteam'
import Project from './components/Project/Project'
import ProjectCreation from './components/ProjectCreation/ProjectCreation'
import SearchContent from './components/SearchContent/SearchContent'
//imagens


function AboutUs() {
    return (
        <main className='about-us'>
            <HeaderNav showLine/>
            <div className="content">
                <MyTeam />
                <Project />
                <section className='section-about wraper-section-dual'>
                    <ProjectCreation />
                    <div className="line-col"></div>
                    <SearchContent />
                </section>
            </div>
        </main>
    )
}   

export default AboutUs