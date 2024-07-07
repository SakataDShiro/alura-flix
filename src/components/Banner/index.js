import styles from "./Banner.module.css"
import { useContext, useEffect, useState } from "react"
import { VideosContext } from "context/videos"
import { Link } from "react-router-dom"

function Banner(){

    
    const {videos, lengthVideos, categoria} = useContext(VideosContext)
    const [videoDestacado, setVideoDestacado] = useState({
        titulo:"titulo",
        categoria:"categoria",
        imagen:"imagen",
        url: "url",
        descripcion: "descripcion"
    })

    useEffect(()=> 
    {
    const numeroAzar = ()=> Math.floor(Math.random() * videos.length + 1)
    function destacarVideo(){
        let idAzar= numeroAzar()
        if (idAzar == 0 ){
            idAzar= idAzar+1
            
        }
        const videoElegido = videos.filter(video=> video.id == idAzar && video.id)
        const colorCategoria = videoElegido.categoria

        console.log(colorCategoria)
        setVideoDestacado(videoElegido[0])

    }

   destacarVideo()    
    
    }, [lengthVideos == videos.length])

    if (videoDestacado){

       
        return (    
        
        <>
        <Link to={`/${videoDestacado.id}`} style={{ textDecoration: 'none' }}>
        <div className={styles.banner}>
            
            <div className={styles.info}>
                <button>{`${videoDestacado.categoria}`}</button> 
                <div className={styles.title}>
                <p>{videoDestacado.titulo} </p>
                </div>
                <div className={styles.description}>
                <p>{videoDestacado.descripcion}</p>
                </div>
            </div>
            <div className={styles.img_container}>
                <img src={videoDestacado.imagen}></img>
            </div>
            
        </div>
        </Link>
        </>
    )}

}

export default Banner