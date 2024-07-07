import Card from "components/Card"
import styles from "./CategoriaContainer.module.css"

function CategoriaContainer({nombre, color, videos, categorias}){

    
    const videosFiltrados = videos.filter(video=> video.categoria === nombre)
    const categoriaFiltrada = categorias.filter(categoria=> categoria.nombre === nombre)


    if(videosFiltrados.length>0){return(
        <div className={styles.container}>
            <button className={styles.name} style={{backgroundColor: `${color}`}}>
                {nombre}
            </button>
            <div className={styles.scroll}>
                {
                    videosFiltrados.map(video=> {
                        return <Card color={color} {...video} key={video.id}/>
                    })
                }
                
            </div>
        </div>)}else{
            <></>
        }
    
}

export default CategoriaContainer