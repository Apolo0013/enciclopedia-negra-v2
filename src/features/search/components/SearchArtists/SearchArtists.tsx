import './SearchArtists.scss'
//components
import SearchCard from '../SearchCard'
import type { ArtistData } from '../../../../data/type'
import data from '../../../../data'
//type
type Props = {
    valuesSearch: ArtistData[]
}

function SearchArtists({ valuesSearch }: Props) {
    //const list = Object.values(data).flatMap(x => x)//.slice(0, 1)
    return (
        <div className='artists-results-search'>
            {
                //valuesSearch
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