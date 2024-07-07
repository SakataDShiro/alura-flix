import {createContext, useContext, useEffect, useState } from "react";

export const VideosContext= createContext()

VideosContext.displayName= "Videos"

export default function VideosProvider({children}){
    const [videos, setVideos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [lengthVideos, setLengthVideos] = useState()
    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [videoAEditar, setVideoAEditar] = useState({})
    const [hayVideos, setHayVideos] = useState(false)
    

    useEffect(()=>{
        
        const fetchDataVideos = async () => {
            const data = await fetch("https://my-json-server.typicode.com/SakataDShiro/alura-flix-api/videos");
            const json = await data.json()
            return json
        }
        
        const fetchDataCategorias = async () => {
            const data = await fetch("https://my-json-server.typicode.com/SakataDShiro/alura-flix-api/categorias");
            const json = await data.json()
            return json
        }

        fetchDataVideos()
        .then(json=>{
            setVideos(json)
            setLengthVideos(json.length)
            setHayVideos(true)
        })

        fetchDataCategorias()
        .then(data=>{
            setCategorias(data)
        })

        

    },[])

    

    return <VideosContext.Provider value={{videos, setVideos, categorias, setCategorias, lengthVideos, setLengthVideos, mostrarFormulario, setMostrarFormulario, videoAEditar, setVideoAEditar, hayVideos}}>
    {children}
    </VideosContext.Provider>
}


export function useMoverVideosContext(){

    const {videos, setVideos, mostrarFormulario, setMostrarFormulario} = useContext(VideosContext)
    

    function quitarVideos(id){
        
        
        const videosFiltrados = videos.filter((video)=> video.id != id)
        setVideos(videosFiltrados)

    }

    function añadirVideo(nuevoVideo){
        setVideos([...videos, nuevoVideo])
        console.log(videos)
    }

    function aparecerFormulario(){
        setMostrarFormulario(!mostrarFormulario)
    }
    

    function editarVideo(videoEditado){
        const indexVideo = videos.findIndex(video => video.id == videoEditado.id)
        console.log(videos[indexVideo])
        const videoSeleccionado = videos[indexVideo]
        if (videoEditado) {
            videoSeleccionado.titulo = videoEditado.titulo
            videoSeleccionado.categoria = videoEditado.categoria
            videoSeleccionado.imagen= videoEditado.imagen
            videoSeleccionado.url= videoEditado.url
            videoSeleccionado.descripcion=videoEditado.descripcion
            videoSeleccionado.año=videoEditado.año
        }
        
    }

    return{quitarVideos, añadirVideo, aparecerFormulario, editarVideo}

    
}