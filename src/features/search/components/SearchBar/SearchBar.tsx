import './SearchBar.scss'
//imagens
import ImgSearch from '../../../../shared/assets/Search'
import ImgArrowTail from '../../../../shared/assets/ImgArrowTail'
//type
import type { Dispatch, SetStateAction, SubmitEvent } from 'react'
type Props = {
    setValueEntry: Dispatch<SetStateAction<string>>,
    valueEntry: string,
    handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void
}

function BarSearch({
    handleSubmit,
    setValueEntry,
    valueEntry
}: Props) {
    return (
        <search className='bar-search'>
            <form onSubmit={handleSubmit}>
                <ImgSearch />
                <input
                    autoComplete='off' // retirar os autocomplete
                    onChange={(e) => {
                        setValueEntry(e.currentTarget.value)
                    }}
                    value={valueEntry}
                    type="search"
                    id="pesquisa"
                    name='q'
                    placeholder='Digite o nome do artista, banda ou palavra-chave...'
                />

                <button
                    className='btn-search'
                    type='submit'
                    id='pesquisa'
                >
                    <p>Buscar</p>
                    <ImgArrowTail />
                </button>
            </form>
        </search>
    )
}

export default BarSearch