import { useState } from "react"
import useMediaQuery from "../../hook/useMediaQuery"

function useHeaderNav() {
    const isMobile = useMediaQuery("(max-width: 600px)")
    const [clickMenuMobile, setClickMenuMobile] = useState<boolean>(false)
    return {    
        isMobile,
        setClickMenuMobile,
        clickMenuMobile
    }
}

export default useHeaderNav