import './Search.scss'
//componentes
import HeaderNav from '../../shared/components/HeaderNav'
import IntroPage from '../../shared/components/IntroPage'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'
//hook
import useSearch from './hook/useSearch'

function Search() {
    const contentIntro = {
        title: "Pesquisar artistas",
        description: "Encontre artistas e personalidades que fazem parte da nossa história."
    }
    const {
        handleSubmit,
        setValueEntry,
        valueEntry,
        valuesSearch
    } = useSearch()
    return (
        <main className="search">
            <HeaderNav showLine />
            <IntroPage
                title={contentIntro.title}
                description={contentIntro.description}
            />
            <div className="wraper-padding">
                <SearchBar
                    handleSubmit={handleSubmit}
                    setValueEntry={setValueEntry}
                    valueEntry={valueEntry}
                />
                <SearchResult
                    valuesSearch={valuesSearch}
                    valueEntry={valueEntry}
                />
            </div>
        </main>
    )
}

export default Search