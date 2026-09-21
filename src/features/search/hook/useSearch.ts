import { useEffect,  useState, type SubmitEvent } from "react"
import data from "../../../data"
import type { namesInfo } from "./type"
import type { ArtistData } from "../../../data/type"

function useSearch() {
    function normalize(text: string): string {
        return text 
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")    
            .toLowerCase()
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault() //retirar o efeito padrao do evento
        if (valueEntry.length == 0) return 
        const search: namesInfo[] = names // "pesquisando" os nome que forem parecido e aguandando
            .filter(({ name }) => name.includes(normalize(valueEntry)))
        const resultSearch = Object.values(data)
            .flatMap(values => values)
            .filter(({ idImgs }) => search.some(v => v.id == idImgs))
        console.log(resultSearch)
        setValuesSearch(resultSearch)
    }
    //data
    const names: Array<namesInfo> = Object.values(data)
        .flatMap(values => values)
        .map(values => ({
            name: normalize(values.name),
            id: values.idImgs
        }))
    //state/valor da entrada pesquisa
    const [valueEntry, setValueEntry] = useState<string>("")
    //valores das pesquisa
    const [valuesSearch, setValuesSearch] = useState<ArtistData[]>([])
    useEffect(() => {
        console.log(valuesSearch)
    }, [valuesSearch])
    return {
        valueEntry,
        setValueEntry,
        handleSubmit,
        valuesSearch
    }
}

export default useSearch