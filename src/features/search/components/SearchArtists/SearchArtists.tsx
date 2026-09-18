import './SearchArtists.scss'
//temp
import data from '../../../../data'
//components
import SearchCard from '../SearchCard'

function SearchArtists() {
    const list = Object.values(data).flatMap(x => x)
    return (
        <div className='artists-results-search'>
            {
                list.map((artistData, key) => (
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