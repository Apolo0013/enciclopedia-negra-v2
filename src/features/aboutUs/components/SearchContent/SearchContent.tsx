import './SearchContent.scss'
import '../../aboutUs.scss'
//imagens
import ImgBook from '../../assets/book.svg'

function SearchContent() {
    const pesquisadores: string[] = [
        "Emylle Vitória dos Santos Cruz Silva",
        "Savyu Rayuty Tionacio",
        "Ana Clara dos Santos",
        "Kauany Mayara Amaro Pereira",
        "Vanessa dos Santos Gomes",
        "Walter Alves de Araújo",
        "Joenilly Esther Soares da Silva",
    ];

    const esquerda = pesquisadores.slice(0, 4)
    const direita = pesquisadores.slice(4, 7)
    console.log(esquerda)
    console.log(direita)
    
    return (
        <section className="section-about search-content">
            <h3>PESQUISA DE ARTISTAS E OBRAS</h3>
            <p>Durante o desenvolvimento da Enciclopédia Negra, os alunos listados abaixo pesquisaram artistas e elaboraram biografias detalhadas. Cada um também selecionou duas obras de arte para compor a exposição final do projeto.</p>
            <div className='dual-list'>
                <ul>
                    {
                        esquerda.map((name, key) => (
                            <li key={key}>
                                <img
                                    src={ImgBook}
                                    alt="Imagem de um livro"
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
                                    src={ImgBook}
                                    alt="Imagem de um livro"
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

export default SearchContent