import '../../aboutUs.scss'
import './Project.scss'

import ProjectCards from '../ProjectCards'

function Project() {
    return (
        <section className='section-about section-project'>
            <h2>O PROJETO DE ELETIVA</h2>
            <p className="about-paragraph">
                A <strong>disciplina eletiva</strong> faz parte dos
                <strong> Itinerários Formativos</strong> do
                <strong className='marking-text'> Referencial Curricular do Ensino Médio Potiguar</strong>,
                conectando-se diretamente à
                <strong> Formação Geral Básica</strong>.
            </p>

            <p className="about-paragraph">
                No nosso caso, essa disciplina está sendo desenvolvida por meio do
                <strong className='marking-text'> Projeto Enciclopédia Negra</strong>, que valoriza a
                <strong> cultura afro-brasileira</strong> e contribui para uma
                <strong> educação mais justa e representativa</strong>.
            </p>

            <p className="about-paragraph">
                O projeto é guiado pelos
                <strong className='marking-text'> Eixos Estruturantes</strong>, que desempenham um papel
                essencial na
                <strong> flexibilização do currículo</strong>. São eles:
            </p>
            <ProjectCards/>
        </section>
    )
}

export default Project