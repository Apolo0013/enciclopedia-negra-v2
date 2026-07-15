import { useRef } from "react"

function useBackgroundHome() {
    function exchargeLate() {
        if (refsImg.current.length == 0)
            return;
        //em busca do indice do elemento que tem o data-vez == "yes"
        const indexTarget = refsImg.current
            .findIndex(
                el => el.dataset!.vez == 'yes'
        )
        const indexNew =
            indexTarget + 1 >= refsImg.current.length - 1
                ? 0 
                : indexTarget + 1
        //elementos
        const elLast = refsImg.current[indexTarget] // o atual
        const elNew = refsImg.current[indexNew] // o que deve se mostrar agora.
        //falando de quem é a vez
        elLast.dataset.vez = 'no'
        elNew.dataset.vez = 'yes'
        //add o style
        elLast.style.opacity = '0'
        elNew.style.opacity = '1'

    }

    const refsImg = useRef<HTMLImageElement[]>([])
    return {
        refsImg,
        exchargeLate
    }
}

export default useBackgroundHome