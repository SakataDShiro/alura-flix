import { Link } from "react-router-dom"
import styles from "./HeaderLink.module.css"

function HeaderLink({url, children}){
    return(
        <div className={styles.container}>
        <Link to={url} className={styles.link}>
        <button className={styles.button}>
        
            {children}
        
        </button>
        </Link>
        </div>
    )
}

export default HeaderLink