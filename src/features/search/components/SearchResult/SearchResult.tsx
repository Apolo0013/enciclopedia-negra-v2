import type { ArtistData } from '../../../../data/type'
import SearchArtists from '../SearchArtists'
import SearchNotResult from '../SearchNotResult'
import './SearchResult.scss'
type Props = {
    valuesSearch: ArtistData[] | null,
    valueEntry: string
}

function SearchResult({ valuesSearch, valueEntry }: Props) {
    console.log(valuesSearch)
    return (
        <section className='search-result'>
            {
                valueEntry.length > 0
                    ?<>
                        <div className="search-current">
                            <h3>Resultados para:</h3>
                            <p>
                                "{valueEntry}"
                            </p>
                        </div>
                        {
                            valuesSearch
                                ? <SearchArtists
                                    valuesSearch={valuesSearch}
                                />
                                : <SearchNotResult />
                        }
                        
                    </>
                : null
                
            }
        </section>
    )
}

export default SearchResult