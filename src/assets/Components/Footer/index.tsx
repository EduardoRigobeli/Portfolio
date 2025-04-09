import styles from './footer.module.css'
import { FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

function Footer(){
    return(
        <>
        <footer className={styles.container}>
            <span className={styles.blur}></span>
            <span className={styles.blur}></span>
            <div className={styles.column}>
                <img src="../../public/Letter R for Business Logo.png" />
                <p>
                    Está espereando o que? Venha construir interfaces incríveis que encantam e convertem!
                </p>
                <div className={styles.socials}>
                    <a href="#"><FaGithub /></a>
                    <a href="#"><MdEmail /></a>
                    <a href="#"><FiInstagram /></a>
                    <a href="#"><FaFacebook /></a>
                </div>
            </div>
            <div className={styles.column}>
                
            </div>
        </footer>
        </>
    )
}

export default Footer;
