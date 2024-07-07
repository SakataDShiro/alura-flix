import { useContext } from "react"
import styles from "./ListaOpciones.module.css"
import { VideosContext } from "context/videos"

const ListaOpciones = ({actualizarState, valor})=>{

    const manejarCambio= (e)=> {
        actualizarState(e.target.value)
    }

    const {categorias} = useContext(VideosContext)

    return <div className={styles.container}>
        <label>Demografías</label>

        <select 
        value={valor} 
        onChange={manejarCambio}>
            <option 
            value="" 
            disabled 
            defaultValue="" 
            hidden>
            Selecciona la demografía del anime
            </option>

            {categorias.map((categoria) =>{
                return <option value={categoria.nombre} key={categoria.id}>{categoria.nombre}</option>
            })}
        </select>

    </div>
}

export default ListaOpciones