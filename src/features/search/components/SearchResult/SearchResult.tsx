import type { ArtistData } from '../../../../data/type'
import SearchArtists from '../SearchArtists'
import './SearchResult.scss'
type Props = {
    valuesSearch: ArtistData[],
    valueEntry: string
}

function SearchResult({ valuesSearch, valueEntry}: Props) {
    return (
        <section className='search-result'>
            {
                valueEntry.length > 0
                    ? <>
                        <div className="search-current">
                            <h3>Resultados para:</h3>
                            <p>
                                "{valueEntry}"
                            </p>
                        </div>
                            <SearchArtists
                            valuesSearch={valuesSearch}
                            />
                        </>
                    : null
            }
        </section>
    )
}

export default SearchResult