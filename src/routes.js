import NotFound from "pages/NotFound";
import NuevoVideo from "pages/NuevoVideo";
import PaginaBase from "pages/PaginaBase";
import VideoSeleccionado from "pages/VideoSeleccionado";
const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes(){
    return(
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio/>}/>
                    <Route path="nuevo-video" element={<NuevoVideo/>}/>
                    <Route path=":id" element={<VideoSeleccionado/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
                
        </BrowserRouter>
    )
}

export default AppRoutes