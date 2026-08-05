import './aboutUs.scss'
//componente
import HeaderNav from '../../shared/components/HeaderNav/HeaderNav'
import MyTeam from './components/MyTeam'
import Project from './components/Project'
import ProjectCreation from './components/ProjectCreation'
import SearchContent from './components/SearchContent'
import SearchConcept from './components/SearchConcept'
import ExhibitionOrganization from './components/ExhibitionOrganization'
//imagens


function AboutUs() {
    return (
        <main className='about-us'>
            <HeaderNav showLine/>
            <div className="content">
                <MyTeam />
                <Project />
                <section
                    className='section-about wraper-section-dual'
                >
                    <ProjectCreation />
                    <div className="line-col"></div>
                    <SearchContent />
                </section>
                <section
                    className='section-about wraper-section-dual'
                >
                    <SearchConcept />
                    <div className="line-col"></div>
                    <ExhibitionOrganization />
                </section>
            </div>
        </main>
    )
}   

export default AboutUs