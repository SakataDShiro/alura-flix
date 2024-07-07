import styles from "./Campo.module.css"

function Campo({actualizarState, titulo, placeholder, required, valor, expand}){
    const manejarCambio = (e)=>{
        actualizarState(e.target.value)
    }

    if (!expand){return <div className={styles.campo}>
        <label>{titulo}</label>
        <input 
        placeholder={placeholder} 
        required={required} 
        value={valor}
        onChange={manejarCambio}/>
    </div>}

    if (expand){return <div className={styles.campo}>
    <label>{titulo}</label>
    <textarea className={styles.area} 
    placeholder={placeholder} 
    required={required} 
    value={valor}
    onChange={manejarCambio}/>
</div>}
}

export default Campo