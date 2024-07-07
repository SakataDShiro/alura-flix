import CategoriaContainer from "components/CategoriaContainer"
import styles from "./VideosContainer.module.css"
import data from "data/db.json"
import { useContext, useEffect, useState } from "react"
import { VideosContext } from "context/videos"


function VideosContainer(){

    const {videos, categorias} = useContext(VideosContext)

    

    return(
        <section className={styles.container}>
            {categorias.map(categoria=> <CategoriaContainer {...categoria} videos={videos} key={categoria.id} categorias={categorias} />)}
        </section>
    )
}

export default VideosContainer