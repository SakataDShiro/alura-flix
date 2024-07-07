import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import borrar from "./borrar.png"
import editar from "./editar.png"
import { useMoverVideosContext, VideosContext } from "context/videos"
import { useContext } from "react"

function Card({color, imagen, titulo, id, url, categoria, descripcion, año}){

    const {quitarVideos, aparecerFormulario} = useMoverVideosContext()
    const {setVideoAEditar, videoAEditar} = useContext(VideosContext)

    const editarVideo = ()=>{
        setVideoAEditar({
            titulo,
            categoria,
            imagen,
            url,
            descripcion,
            año,
            id});
            aparecerFormulario()
    }

    return(
        <div className={styles.card} style={{
            borderColor: `${color}`
          }}>
        
        <div className={styles.container}>
        <Link to={`/${id}`}>
            <div className={styles.img_container}>
            <img className={styles.img} src={imagen}></img>
            </div>
            </Link>
            <div className={styles.action}>
                <button onClick={()=> quitarVideos(id)}>
                    <div><img src={borrar}/></div>
                    <div className={styles.texto}>BORRAR</div>
                </button>
                <button onClick={()=> {editarVideo()} }>
                <div ><img src={editar}/></div>
                    <div className={styles.texto}>EDITAR</div>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Card