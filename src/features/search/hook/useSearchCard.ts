import { useEffect, useRef } from "react"

function useSearchCard() {
    function ScrollAnimation() {
        if (!refProfGrade.current) return   
        const children = [...refProfGrade.current.children] as HTMLDivElement[]
        const el = refProfGrade!.current
        const distance = 32
        let index = 0
        timer.current = setInterval(() => {
            if (index == children.length) { // final
                //voltando pro comeco
                el.style.transition = 'none'
                el.style.transform = `translateY(-0px)`
                index = 1 // pro proximo
                setTimeout(() => {
                    //manda
                    el.style.transition = 'transform 1s linear'
                    el.style.transform = `translateY(-${distance * index}px)`
                }, 100)
                return
            }
            else {
                el.style.transform = `translateY(-${distance * index}px)`
                index++
            }        
        }, 2000)
    }

    const refProfGrade = useRef<HTMLDivElement | null>(null)
    //variavel do loop
    const timer = useRef<number>(0)
    useEffect(() => {
        return () => {
            clearInterval(timer.current)
        }
    }, [])
    return {
        refProfGrade,
        ScrollAnimation
    }
}

export default useSearchCard