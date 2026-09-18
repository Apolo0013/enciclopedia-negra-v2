import { useEffect, useRef, useState } from "react"

function useSearch() {
    function getSearch() {
        
    }
    //state/valor da entrada pesquisa
    const [valueEntry, setValueEntry] = useState<string>("")
    useEffect(() => { 
        
    }, [valueEntry])
    return {
        valueEntry,
        setValueEntry
    }
}

export default useSearch