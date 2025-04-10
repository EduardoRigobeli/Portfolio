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
                <div className={styles.logo}>
                    <img src="../../public/Letter R for Business Logo.png" />
                </div>
                <p>
                    Está espereando o que? Venha construir interfaces incríveis que encantam e convertem!
                </p>
            </div>
            
            <div className={styles.column}>
                <h4>Contatos</h4>
                <div className={styles.socials}>
                    <a href="#"><FaGithub /></a>
                    <a href="#"><MdEmail /></a>
                    <a href="#"><FiInstagram /></a>
                    <a href="#"><FaFacebook /></a>
                </div>
            </div>
        </footer>
        <div className={styles.copyright}>
            &copy; Feito por Eduardo Rigobeli
        </div>
        </>
    )
}

export default Footer;
