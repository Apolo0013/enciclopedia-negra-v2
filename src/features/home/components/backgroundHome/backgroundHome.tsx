import './backgroundHome.scss'
//imagem
import { imagensBack } from './assets/index'
//hook
import useBackgroundHome from './hook/useBackgroundHome'
import { useEffect } from 'react'

function BackgroundHome() {
    //hook
    const {
        refsImg,
        exchargeLate
    } = useBackgroundHome()
    useEffect(() => {
        if (refsImg.current.length == 0)
            return
        const timer = setInterval(exchargeLate, 3000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div
            className='background-home'
        >
            {
                imagensBack.map((src, i) => (
                    <img
                        ref={ref =>{
                            if (
                                ref && // deve se valido
                                refsImg.current.every(rf => ref != rf) // nenhuma referencia do elemento pode se repetir.
                            ) { 
                                refsImg.current.push(ref)
                            }
                        }}
                        key={i}
                        src={src}
                        alt="imagem de fundo"
                        data-vez={i == 0 ? "yes" : "no"}
                        //o primeiro comecera com opacidade 1
                        style={{
                            opacity: i == 0 ? 1 : 0
                        }}
                    />
                ))  
            }
        </div>
    )
}

export default BackgroundHome