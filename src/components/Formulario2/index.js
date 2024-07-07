import { useContext, useEffect, useState } from "react"
import styles from "./Formulario2.module.css"
import Campo from "components/Campo"
import { useMoverVideosContext, VideosContext } from "context/videos"
import ListaOpciones from "components/ListaOpciones"
import cerrar from "./X - cancel.png"

function Formulario2(){
    
    const {aparecerFormulario, editarVideo} = useMoverVideosContext()
    const {videoAEditar} = useContext(VideosContext)

    const [titulo, actualizarTitulo] = useState(videoAEditar.titulo)
    const [categoria, actualizarCategoria] = useState(videoAEditar.categoria)
    const [imagen, actualizarImagen] = useState(videoAEditar.imagen)
    const [url, actualizarUrl] = useState(videoAEditar.url)
    const [descripcion, actualizarDescripcion] = useState(videoAEditar.descripcion)
    const [id, actualizarId] = useState(videoAEditar.id)
    const [año, actualizarAño] = useState(videoAEditar.año)


    function manejarEnvio(){
        const videoEditado= {
            titulo,
            categoria,
            imagen,
            url,
            descripcion,
            id,
            año
        }
        editarVideo(videoEditado)
    }

    function limpiar(){
        actualizarTitulo("")
        actualizarCategoria("")
        actualizarImagen("")
        actualizarUrl("")
        actualizarDescripcion("")
        actualizarAño("")
    }

    return(<>
        <section className={styles.section}>
            <div className={styles.scroll_container}>
            <img className={styles.cerrar} onClick={()=> aparecerFormulario()} src={cerrar} />
            <form onSubmit={manejarEnvio()} >
                <h2 className={styles.title}>Rellena el formulario para editar 
                    <br/>{videoAEditar.titulo} 
                    </h2>
            <Campo 
            titulo="Título" 
            placeholder="Ingresar el título" 
            required 
            valor={titulo} 
            actualizarState={actualizarTitulo}/>
            <ListaOpciones
            actualizarState={actualizarCategoria}
            valor={categoria}/>
            <Campo 
            titulo="Url" 
            placeholder="Url del trailer del anime (embed)" 
            required 
            valor={url} 
            actualizarState={actualizarUrl} />
            <Campo 
            titulo="Imagen" 
            placeholder="Url de la imagen" 
            required 
            valor={imagen} 
            actualizarState={actualizarImagen} />
            <Campo 
            titulo="Año" 
            placeholder="Año de salida" 
            required 
            valor={año} 
            actualizarState={actualizarAño} />
            <Campo 
            titulo="Sinopsis" 
            placeholder="Ingresa la sinopsis" 
            required 
            valor={descripcion} 
            actualizarState={actualizarDescripcion}
            expand/>
            <div className={styles.button_container}>
            <button type="submit" onClick={()=>aparecerFormulario()} className={styles.button}>GUARDAR</button>
            <button type="button" onClick={()=> limpiar()} className={styles.button}>LIMPIAR</button>
            </div>
            </form>
            </div>
        </section>
        </>) 
}

export default Formulario2