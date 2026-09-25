import ImgSearch from '../../../../shared/assets/Search'
import ImgArrow from '../../../artists/assets/ImgArrow'
import type { suggestionSearch } from '../../hook/type'
import './SearchSuggestion.scss'

type Props = {
    valuesSeggestion: suggestionSearch[],
    onClick: (name: string) => void
}   

function SearchSuggestion({
    valuesSeggestion,
    onClick
}: Props) {
    return (
        <div className="search-suggestion">
            <h2 className='search-suggestion-title'>SUGESTÃO</h2>
            <div className="grid-suggestion">
                {
                    valuesSeggestion.map(({id, name}) => (
                        <div className="suggestion"
                            key={id}
                            onClick={() => onClick(name)}
                        >
                            <ImgSearch />
                            <p>{name}</p>
                            <ImgArrow/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchSuggestion