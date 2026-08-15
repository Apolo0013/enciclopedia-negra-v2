import './ProjectCreation.scss'
import '../../aboutUs.scss'
import ImgPeople from '../../assets/people'

function ProjectCreation() {
    const people = [
        {
            nome: "Apolônio Guilherme Lima da Silva",
            sobre: "Desenvolvedor da plataforma, responsável pela arquitetura, programação e implementação do site"
        },
        {
            nome: "Aristófanes Lázaro da Silva Romão",
            sobre: "Pesquisa e produção de conteúdo"
        },
        {
            nome: "Vinicius Gabriel Gonzaga Gomes",
            sobre: "Pesquisa histórica e produção de conteúdo"
        }
    ];

    return (
        <section className='section-about project-creation'>
            <h3>CRIAÇÃO DA PLATAFORMA</h3>
            <p className='about-paragraph'>Nossa plataforma foi desenvolvida por uma equipe dedicada e criativa. Eles transformaram a ideia da Enciclopédia Negra em uma experiência digital acessível e inovadora.</p>
            <ul>
                {
                    people.map(({nome, sobre}, key) => (
                        <li key={key}>
                            <ImgPeople />
                            <p><strong>{nome}</strong> — {sobre}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ProjectCreation
