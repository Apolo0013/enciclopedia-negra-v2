import './ProjectCards.scss'
//imagens
import ImgMicro from '../../assets/micro.svg'
import ImgLight from '../../assets/light.svg'
import ImgPeople from '../../assets/people.svg'
import ImgStar from '../../../../shared/assets/star.svg'

function ProjectCards() {
    type contentProjectCards = {
        src: string,
        title: string,
        description: string
    }

    const content: contentProjectCards[] = [
        {
            src: ImgMicro,
            title: "Investigação Científica",
            description: "Exploração e análise de fenômenos."
        },
        {
            src: ImgLight,
            title: "Processos Criativos",
            description: "Estimula a inovação e soluções originais."
        },
        {
            src: ImgPeople,
            title: "Mediação e Intervenção Sociocultural",
            description: "Promove a participação cidadã e impacto social."
        },
        {
            src: ImgStar,
            title: "Empreendedorismo",
            description: "Desenvolve habilidades para criar e gerenciar."
        }
    ]

    return (
        <div className="project-grid">
            {
                content.map(({
                    title, src, description
                }, key) => (
                    <div className="project-card" key={key}>
                        <div className="project-card-wraperImg">
                            <img
                                src={src}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3>{title}</h3>
                            <h4>{description}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCards