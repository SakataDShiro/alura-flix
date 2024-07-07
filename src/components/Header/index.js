import HeaderLink from "components/HeaderLink"
import styles from "./Header.module.css"
import logo from "./LogoMain.png"
import { Link } from "react-router-dom"
import subir from "./NuevoVideo.png"
import home from "./home.png"

function Header(){
    return(
        <>
        <header>
            <Link to={"/"}>
            <section className={styles.logo_container}>
            
            <img className={styles.img} src={logo}></img>
                </section>
            </Link>
            <nav className={styles.nav}>

            <div className={styles.headerLinkTexto}>
            <HeaderLink  url="./nuevo-video">
            NUEVO VIDEO
            </HeaderLink>
            </div>
            <div className={styles.headerLinkSubir}>
            <Link  to={"./nuevo-video"} >
            <img className={styles.subir} src={subir}></img>
            </Link>
            </div>
            <div className={styles.headerLinkHome}>
            <Link  to={"/"} >
            <img className={styles.subir} src={home}></img>
            </Link>
            </div>
            </nav>
        </header>
        </>
    )
}

export default Header