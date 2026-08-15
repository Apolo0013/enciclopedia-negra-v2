import './SearchConcept.scss'
//imagens
import ImgPincel from '../../assets/pincel.svg'
import ImgClip from '../../assets/clipboard.svg'

function SearchConcept() {
    const pesquisadoresConceito: string[] = [
        "Fagner Pereira da Silva",
        "Jhonata Michel França dos Santos",
        "Mayara Maciel da Sá",
        "Ryan da Silva Dias",
    ];

    return (
        <section className='section-about search-concept'>
            <h3>PESQUISA DO CONCEITO DAS OBRAS</h3>
            <p className='about-paragraph'>A equipe foi braba e garantiu que as obras fossem vistas como devem: com presença, estrutura e impacto. Responsáveis pela logística, montagem e organização geral do espaço.</p>
            <div className='sub-title'>
                <img
                    src={ImgClip}
                    alt="Imagem de um prancheta"
                />
                <h4>Pesquisadores do conceito</h4>
            </div>
            <ul>
                {
                    pesquisadoresConceito.map((name, key) => (
                        <li key={key}>
                            <img
                                src={ImgPincel}
                                alt="Imagem "
                            />
                            <p>{name}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default SearchConcept