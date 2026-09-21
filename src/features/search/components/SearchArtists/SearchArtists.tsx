import './SearchArtists.scss'
//components
import SearchCard from '../SearchCard'
import type { ArtistData } from '../../../../data/type'
//type
type Props = {
    valuesSearch: ArtistData[]
}

function SearchArtists({valuesSearch}: Props) {
    return (
        <div className='artists-results-search'>
            {
                valuesSearch.map((artistData, key) => (
                    <SearchCard
                        key={key}
                        artistData={artistData}
                    />
                ))
            }
        </div>
    )
}

export default SearchArtists