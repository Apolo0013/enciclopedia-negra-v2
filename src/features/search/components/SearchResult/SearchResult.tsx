import SearchArtists from '../SearchArtists'
import './SearchResult.scss'

function SearchResult() {
    return (
        <section className='search-result'>
            <div className="search-current">
                <h3>Resultados para:</h3>
                <p>
                    "ab"
                </p>
            </div>
            <SearchArtists />
        </section>
    )
}

export default SearchResult