import ImgPeople from '../../assets/people'
import './ResponsibleSupervision.scss'

function ResponsibleSupervision() {
    return (
        <section className='section-about responsible-supervision'>
            <h2 className='supervision-title'>SUPERVISÃO E ORIENTAÇÃO</h2>
            <div className="supervision-content">
                <div className='supervision-img'>
                    <ImgPeople />
                </div>
                <h4>Victor Oliveira da Mota</h4>
                <div className='supervision-wraper-p'>
                    <p>Professor de Arte da Escola Estadual Professora Ana Júlia de Carvalho Mousinho</p>
                    <p>Mestre em Ensino de Arte e Especialista em Práticas Assertivas</p>
                </div>
            </div>
        </section>
    )
}

export default ResponsibleSupervision