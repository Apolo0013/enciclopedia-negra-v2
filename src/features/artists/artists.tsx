import './artists.scss'
//componentes
import HeaderNav from '../../shared/components/headerNav/headerNav'
import ArtistsGrid from './components/AristisGrid/ArtistsGrid'

function Artists() {
    return (
        <main className="artists">
            <HeaderNav showLine />
            <div className="artists-description">
                <div className='wraper-description'>
                    <h1>Explore artistas de A a Z</h1>
                    <p>Conheça e valorize a história, a cultura e o impacto de grandes artistas negros.</p>
                </div>
            </div>
            <ArtistsGrid />
            
        </main>
    )
}

export default Artists