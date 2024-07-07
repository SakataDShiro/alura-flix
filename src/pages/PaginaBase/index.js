import Footer from "components/Footer"
import Header from "components/Header"
import VideosProvider from "context/videos"
import { Outlet } from "react-router-dom"

function PaginaBase(){

    return(
        <>
        <main> 
            <Header/>
            <VideosProvider>
            <>
            <Outlet/>
            </>
            </VideosProvider>
            <Footer/>
        </main>
        </>
    )
}

export default PaginaBase