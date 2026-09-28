import './SearchBar.scss'
//imagens
import ImgSearch from '../../../../shared/assets/Search'
import ImgArrowTail from '../../../../shared/assets/ImgArrowTail'
//type
import { type Dispatch, type InputEvent, type SetStateAction, type SubmitEvent } from 'react'
import SearchSuggestion from '../SearchSuggestion'
import type { suggestionSearch } from '../../hook/type'
import useMediaQuery from '../../../../shared/hook/useMediaQuery'
type Props = {
    setValueEntry: Dispatch<SetStateAction<string>>,
    valueEntry: string,
    valuesSeggestion: suggestionSearch[],
    handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void,
    handleInput: (e: InputEvent<HTMLInputElement>) => void,
    handleClickInSeggestion: (name: string) => void
}

function BarSearch({
    handleSubmit,
    handleInput,
    setValueEntry,
    handleClickInSeggestion,
    valueEntry,
    valuesSeggestion
}: Props) {
    //Responsividade
    //! é igual ou menor do que 768px
    const isMobile = useMediaQuery("(max-width: 768px)")
    return (
        <search className='bar-search'>
            <form onSubmit={handleSubmit}>
                <ImgSearch />
                <input
                    autoComplete='off' // retirar os autocomplete
                    onChange={(e) => {
                        setValueEntry(e.currentTarget.value)
                    }}
                    onInput={(e) => {
                        handleInput(e)
                    }}
                    value={valueEntry}
                    type="search"
                    id="pesquisa"
                    name='q'
                    placeholder='Digite o nome do artista...'
                />

                <button
                    className='btn-search'
                    type='submit'
                    id='pesquisa'
                >
                    {
                        !isMobile  
                            ?   <>
                                    <p>Buscar</p>
                                    <ImgArrowTail />
                                </>
                            : <ImgSearch/>
                    }
                </button>
            </form>
            {
                valueEntry.length > 0 && valuesSeggestion.length > 0
                    ? <SearchSuggestion
                        valuesSeggestion={valuesSeggestion}
                        onClick={handleClickInSeggestion}
                    />
                    : null
            }
        </search>
    )
}

export default BarSearch