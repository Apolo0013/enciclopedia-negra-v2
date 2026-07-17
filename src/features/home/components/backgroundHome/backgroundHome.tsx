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
        exchargeLate,
        SortImgIndex
    } = useBackgroundHome()
    //
    useEffect(() => {
        if (refsImg.current.length == 0)
            return
        //sortea indice da imagem inicial
        SortImgIndex()
        //loop
        const timer = setInterval(exchargeLate, 10000 + (1000)) // +1000 pro tempo da transicao
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
                        data-vez='no'
                        //o primeiro comecera com opacidade 1
                        style={{
                            opacity: 0
                        }}
                    />
                ))  
            }
        </div>
    )
}

export default BackgroundHome