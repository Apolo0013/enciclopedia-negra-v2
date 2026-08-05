import './ExhibitionOrganization.scss'
//imagens
import ImgPeople from '../../assets/people'
import ImgTools from '../../assets/tools.svg'

function ExhibitionOrganization() {
    const content: string[] = [
        "Anny Gabrielli Silva Félix de Lima",
        "Antony Derick Freire da Silva",
        "Brenno Souza de Oliveira",
        "Higor Vinicius Martins de Souza",
        "Jackson Felipe de Castro Cabral",
        "Lívia Beatriz de Souza Nascimento",
        "Samuel Galdino de Oliveira Silva",
    ]

    const esquerda = content.slice(0, 4)
    const direita = content.slice(4, 7)

    return (
        <section className="section-about exhibition-organization">
            <h3>ORGANIZAÇÃO DE UMA EXPOSIÇÃO</h3>
            <p>Feito foi – as obras foram vistas como devem. A equipe cuidou de cada detalhe para garantir uma exposição marcante e significativa.</p>
            <div className="sub-title">
                <ImgPeople />
                <h4>Time da missão</h4>
            </div>
            <div className="dual-list">
                <ul>
                    {
                        esquerda.map((name, key) => (
                            <li key={key}>
                                <img
                                    src={ImgTools}
                                    alt=""
                                />
                                <p>{name}</p>
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        direita.map((name, key) => (
                            <li key={key}>
                                <img
                                    src={ImgTools}
                                    alt=""
                                />
                                <p>{name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default ExhibitionOrganization