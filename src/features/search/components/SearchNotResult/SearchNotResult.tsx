import ImgSearch from '../../../../shared/assets/Search'
import './SearchNotResult.scss'

function SearchNotResult() {
    return (
        <div className="search-not-result">
            <div className='icone-not-result'>
                <ImgSearch />
            </div>
            <h2>Nenhum resultado encontrado</h2>
            <p>Não encontramos nenhum artista ou personalidade correspondente à sua busca no acervo.</p>
        </div>
    )
}

export default SearchNotResult