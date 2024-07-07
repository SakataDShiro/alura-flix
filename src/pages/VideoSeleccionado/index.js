import { useParams } from "react-router-dom"
import styles from "./VideoSeleccionado.module.css"
import { useContext, useEffect, useState } from "react"
import { VideosContext } from "context/videos"

function VideoSeleccionado(){
    
    const parametros = useParams()
    const [video, setVideo] = useState({
        titulo: "titulo",
        categoria: "categoria",
        imagen: "https://storage.googleapis.com/support-forums-api/attachment/thread-6219249-11716624739372349952.png",
        url: "url",
        descripcion: "descripcion",
        id: "id"
    })
    const {categorias, videos, hayVideos} = useContext(VideosContext)
    const [categoria, setCategoria] = useState({})
    const [color, setColor] = useState("")
    
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/SakataDShiro/alura-flix-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data=>{
            setVideo(data[0])
            setCategoria(data[0].categoria)
        })}, [])    

    return(
        <>
        
        <div className={styles.backgroundImage}
        style={{
        backgroundImage: `url(${video.imagen})`, 
        filter: "grayscale(1) blur(8px)",
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", }}></div>
        <div className={styles.button_container}>
        <button className={styles.button} style={{backgroundColor: `${color}`}}>{video.categoria} </button>
        </div>
        <div className={styles.container} >
            <div className={styles.info}>
                    <h2 className={styles.title}>{`${video.titulo}`} </h2>
                    <h2 className={styles.year}>{`${video.año}`} </h2>
                <div className={styles.description_container}>
                    <p className={styles.description}>{`${video.descripcion}`} </p>
                </div>
            </div>
            <div className={styles.videoContainer}>
            <iframe 
            width="500" height="300" 
            src= {video.url}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
            </div>
        </div>
        </>
    )

}

export default VideoSeleccionado