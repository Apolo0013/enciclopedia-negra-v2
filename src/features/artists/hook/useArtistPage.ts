import { useRef } from "react"

function useArtistPage() {
    function ScrollToArtist(): boolean {
        if (!refSectionTarget.current) return false
        refSectionTarget.current.scrollIntoView({
            behavior: 'smooth',
            block: "end"
        })
        return true
    }
    //a referencia pra dar o scroll, pra onde o scroll deve ir.
    const refSectionTarget = useRef<HTMLElement | null>(null)
    return {
        refSectionTarget,
        ScrollToArtist
    }
}

export default useArtistPage