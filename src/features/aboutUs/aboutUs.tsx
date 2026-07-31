import './aboutUs.scss'
//componente
import HeaderNav from '../../shared/components/headerNav/headerNav'
//imagens
import ImgAfrica from './assets/africa.svg'


function AboutUs() {
    return (
        <main className='about-us'>
            <HeaderNav showLine/>
            <section className='section-about section-myTeam'>
                <div>
                    <h2>NOSSA EQUIPE E PROJETO</h2>
                    <p>Conheça as mentes por trás da nossa plataforma e entenda como o <strong className="marking-text">Projeto Enciclopédia Negra</strong>, desenvolvido na disciplina de Eletiva com estudantes da <strong className="marking-text">2ª série do Ensino Médio</strong> da <strong className="marking-text">Escola Estadual Professora Ana Júlia de Carvalho Mousinho</strong>, promove a <strong>valorização da história e da cultura afro-brasileira por meio da educação e da representatividade</strong>.</p>
                    <p>Sob a supervisão e orientação do professor de arte <strong className="marking-text">Victor Mota</strong>, o projeto integra um componente curricular <strong>optativo</strong> de caráter interdisciplinar e transdisciplinar, oferecendo semestralmente como parte da <strong>formação integral</strong> dos alunos.</p>
                    <p>De acordo com o <strong className="marking-text">Referencial Curricular do Ensino Médio Potiguar (2021)</strong>, "os Eixos <strong>Estruturantes</strong> transversalizam a problematização de situações vivenciadas no cotidiano local, regional e/ou global, que, por sua vez, inspiram temas e títulos de <strong>projetos pedagógicos</strong> a partir da abordagem suscitada."</p>
                </div>
                <img
                    className='img-africa'
                    src={ImgAfrica}
                    alt="Imagem do continente africa"
                />
            </section>
        </main>
    )
}   

export default AboutUs