import './ProjectCreation.scss'
import '../../aboutUs.scss'
import ImgPeople from '../../assets/people'

function ProjectCreation() {
    return (
        <section className='section-about project-creation'>
            <h3>CRIAÇÃO DA PLATAFORMA</h3>
            <p>Nossa plataforma foi desenvolvida por uma equipe dedicada e criativa. Eles transformaram a ideia da Enciclopédia Negra em uma experiência digital acessível e inovadora.</p>
            <ul className='list-auto'>
                <li>
                    <ImgPeople/>
                    <p><strong>Apolônio Guilherme Lima da Silva</strong> — Desenvolvedor da plataforma, responsável pela arquitetura, programação e implementação do site</p>
                </li>
                <li>
                    <ImgPeople />
                    <p><strong>Aristófanes Lázaro da Silva Romão</strong> — Pesquisa e produção de conteúdo</p>
                </li>
                <li>
                    <ImgPeople />
                    <p><strong>Vinicius Gabriel Gonzaga Gomes</strong> — Pesquisa histórica e produção de conteúdo</p>
                </li>
            </ul>
        </section>
    )
}

export default ProjectCreation