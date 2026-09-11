import './BarSearch.scss'
//imagens
import ImgSearch from '../../../../shared/assets/Search'
import ImgArrowTail from '../../../../shared/assets/ImgArrowTail'

function BarSearch() {
    return (
        <search className='bar-search'>
            <form>
                <ImgSearch />
                <input
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