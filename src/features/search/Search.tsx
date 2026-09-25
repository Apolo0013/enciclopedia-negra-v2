import './Search.scss'
//componentes
import HeaderNav from '../../shared/components/HeaderNav'
import IntroPage from '../../shared/components/IntroPage'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'
import Footer from '../../shared/components/Footer'
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
        handleInput,
        handleClickInSeggestion,
        valueEntry,
        valuesSearch,
        valuesSeggestion
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
                    handleInput={handleInput}
                    setValueEntry={setValueEntry}
                    valueEntry={valueEntry}
                    valuesSeggestion={valuesSeggestion}
                    handleClickInSeggestion={handleClickInSeggestion}
                />
                <SearchResult
                    valuesSearch={valuesSearch}
                    valueEntry={valueEntry}
                />
            </div>  
            <Footer/>
        </main>
    )
}

export default Search