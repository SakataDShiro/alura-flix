import Banner from "components/Banner"
import styles from "./Inicio.module.css"
import VideosContainer from "components/VideosContainer"
import Formulario2 from "components/Formulario2"
import { useContext, useEffect } from "react"
import { useMoverVideosContext, VideosContext } from "context/videos"

function Inicio(){

    const{mostrarFormulario} = useContext(VideosContext)

    return(
        <>
        <Banner/>
        <VideosContainer/>
        <>
        {mostrarFormulario &&
            <Formulario2/>
        }
        </>
        </>
    )
}

export default Inicio