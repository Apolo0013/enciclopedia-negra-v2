import './Footer.scss'
//imagens
import ImgEmail from '../../assets/email.svg'
import ImgPhone from '../../assets/phone.svg'
import ImgLinkedin from '../../assets/linkedin.svg'
import ImgAspas from '../../assets/aspas.svg'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='wraper-footer'>
            <div className='footer'>
                <div className="footer-card">
                    <h3>JUSTIFICADO A DIREITO</h3>
                    <p>Plataforma desenvolvida na disciplina eletiva da Escola Estadual Profº Ana Júlia de Carvalho Mousinho (Localizado no Parque dos Coqueiros, Zona Norte de Natal – RN) por: <strong>Apolônio Guilherme Lima da Silva</strong> (Dev-Web)</p>
                </div>
                <div className="footer-line"></div>
                <div className="footer-card">
                    <h3>CONTATO</h3>
                    <div className="footer-contact">
                        <div>
                            <img
                                src={ImgEmail}
                                alt="Imagem de email"
                            />
                            <p>victormmota@hotmail.com</p>
                        </div>
                        <div>
                            <img
                                src={ImgPhone}
                                alt="Imagem de um telefone"
                            />
                            <p>(84) 3232 – 6973</p>
                        </div>
                        <div>
                            <img
                                src={ImgLinkedin}
                                alt="Imagem do linkedin"
                            />
                            <p>/victor-mota-supervisor</p>
                        </div>
                    </div>
                </div>
                <div className="footer-card footer-frase">
                    <img
                        src={ImgAspas}
                        alt=""
                    />
                    <h2>Não basta não ser racista, é preciso ser antirracista.</h2>
                    <h3>– Angela Davis</h3>
                </div>
            </div>
            <div className="copyright">
                <p>© {year} Enciclopédia Negra. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer