import styles from "./Footer.module.css"
import logo from "./LogoMain.png"

function Footer(){
    return(
        <footer>
            <img className={styles.img} src={logo}></img>
        </footer>

    )
}

export default Footer