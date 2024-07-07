import { useState } from "react"
import styles from "./Formulario.module.css"
import Campo from "components/Campo"
import { useMoverVideosContext } from "context/videos"
import ListaOpciones from "components/ListaOpciones"
import { useNavigate } from "react-router-dom"

function Formulario(){
    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [url, actualizarUrl] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [año, actualizarAño] = useState("")

    const {añadirVideo} = useMoverVideosContext()
    const navigate= useNavigate()

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        let datosAEnviar= {
            titulo,
            categoria,
            imagen,
            url,
            descripcion,
            año
        }
        añadirVideo(datosAEnviar)
        navigate("/")
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
            <form onSubmit={manejarEnvio} >
                <h2 className={styles.title}>Rellena el formulario para añadir un nuevo anime</h2>
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
            <button type="submit" className={styles.button}>AÑADIR</button>
            <button type="button" onClick={()=> limpiar()} className={styles.button}>LIMPIAR</button>
            </div>
            </form>
        </section>
        </>) 
}

export default Formulario