import styles from './Works.module.css'
import { FaGithub, FaArrowRight } from "react-icons/fa";

function Works() {
    return(
        <>
        <div className={styles.works_container}>
            <div className={styles.works}>
                <h4>Landing Page</h4>
                <p>Vite | React-TS | CSS3 | HTML5</p>
                <p className={styles.icon}><a href="#" target='_blank'><FaGithub /></a></p>
                <p className={styles.link}><a href="" target='_blank'>VISUALIZAR <FaArrowRight /></a></p>                
            </div>
            <div className={styles.works}>
                <h4>McDonald's</h4>
                <p>HTML5 | CSS3</p>
                <p className={styles.icon}><a href="#" target='_blank'><FaGithub /></a></p>
                <p className={styles.link}><a href="" target='_blank'>VISUALIZAR <FaArrowRight /></a></p>
            </div>
            <div className={styles.works}>
                <h4>Landing Page</h4>
                <p>Vite | React-TS | CSS3 | HTML5</p>
                <p className={styles.icon}><a href="#" target='_blank'><FaGithub /></a></p>
                <p className={styles.link}><a href="" target='_blank'>VISUALIZAR <FaArrowRight /></a></p>
            </div>
        </div>
        </>
    )
}

export default Works;
