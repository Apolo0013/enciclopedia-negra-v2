import './SearchBar.scss'
//imagens
import ImgSearch from '../../../../shared/assets/Search'
import ImgArrowTail from '../../../../shared/assets/ImgArrowTail'
import useSearch from '../../hook/useSearch'

function BarSearch() {
    const {
        setValueEntry,
        valueEntry
    } = useSearch()
    return (
        <search className='bar-search'>
            <form>
                <ImgSearch />
                <input
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