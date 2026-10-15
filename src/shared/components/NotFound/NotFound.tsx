import { useLocation, useNavigate } from 'react-router-dom'
import './NotFound.scss'
import NotFoundRouteGuard from '../../../app/RouteGuard/NotFoundRouteGuard'

function NotFound() {
    const location = useLocation()
    const nv = useNavigate()
    return (
        <NotFoundRouteGuard>
            <section className='not-found'>
                <div className='box-404'>
                    <h1>404</h1>
                    <h2>Oops! Página Não Encontrada</h2>
                    <p>A página que você está procurando (quizas '{location.pathname}') pode ter sido movida, excluída ou nunca existiu.</p>
                    <button className='go-back-home-btn'
                        onClick={() => nv('/home')}
                    >
                        VOLTAR PARA A PÁGINA INICIAL
                    </button>
                </div>
            </section>
        </ NotFoundRouteGuard>
    )
}

export default NotFound