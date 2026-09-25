import { useEffect,  useState, type InputEvent, type SubmitEvent } from "react"
import data from "../../../data"
import type { namesInfo, suggestionSearch } from "./type"
import type { ArtistData } from "../../../data/type"

function useSearch() {
    function normalize(text: string): string {
        return text 
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")    
            .toLowerCase()
    }

    function getSearch(): ArtistData[] | null {
        if (valueEntry.length == 0) return null
        const search: namesInfo[] = names // "pesquisando" os nome que forem parecido e aguandando
            .filter(({ name }) => name.includes(normalize(valueEntry)))
        const resultSearch = Object.values(data)
            .flatMap(values => values)
            .filter(({ idImgs }) => search.some(v => v.id == idImgs))
        return resultSearch
    }

    function handleClickInSeggestion(name: string) {
        //essa funcao é chamada quando o usuaria clica em algum sugestao
        setValueEntry(name) // coloca a sugestao da entrada
        setValuesSearch([]) // resetando a pesquisa
        setValuesSeggestion([]) // resetando as sugestao
        handleSubmit() // pesquisando oq esta na entrada (ou seja a sugestao)
    }

    function handleInput() {
        const result = getSearch()
        console.log(valueEntry)
        //console.log(result)
        //console.log(e.target.value)
        setValuesSeggestion(result
            ? result.map(value => ({
                id: value.idImgs,
                name: value.name
            }))
            : []
        )
    }

    function handleSubmit(e?: SubmitEvent<HTMLFormElement> | undefined) {
        if (e) e.preventDefault() //retirar o efeito padrao do evento
        const result = getSearch()
        if (!result) return
        setValuesSearch(result)
    }
    //data
    const names: Array<namesInfo> = Object.values(data)
        .flatMap(values => values)
        .map(values => ({
            name: normalize(values.name),
            id: values.idImgs
        }))
    //STATE
    //state/valor da entrada pesquisa
    const [valueEntry, setValueEntry] = useState<string>("")
    //valores das pesquisa
    const [valuesSearch, setValuesSearch] = useState<ArtistData[]>([])
    //sugestoes de pesquisa
    const [valuesSeggestion, setValuesSeggestion] = useState<suggestionSearch[]>([])
    //--!
    useEffect(() => {
        //se nao tive nenhum valor na entrada tudo sera resetado, por logica isso ja acontece mas em alguns caso nao.
        if (valueEntry.length == 0) {
            setValuesSearch([])
            setValuesSeggestion([])
        }
    }, [valueEntry])
    return {
        setValueEntry,
        handleSubmit,
        handleInput,
        handleClickInSeggestion,
        valueEntry,
        valuesSearch,
        valuesSeggestion
    }
}

export default useSearch