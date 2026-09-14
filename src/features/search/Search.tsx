import './Search.scss'
//componentes
import HeaderNav from '../../shared/components/HeaderNav'
import IntroPage from '../../shared/components/IntroPage'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'

function Search() {
    const contentIntro = {
        title: "Pesquisar artistas",
        description: "Encontre artistas e personalidades que fazem parte da nossa história."
    }
    return (
        <main className="search">
            <HeaderNav showLine />
            <IntroPage
                title={contentIntro.title}
                description={contentIntro.description}
            />
            <div className="wraper-padding">
                <SearchBar />
                <SearchResult />
            </div>
        </main>
    )
}

export default Search