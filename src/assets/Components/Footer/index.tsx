import styles from './footer.module.css'
import { FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

function Footer(){
    const email = "rigobelicontato@gmail.com";
    const subject = "Contato pelo site";
    const body = "Olá,\n\nGostaria de mais informações sobre seus serviços!";

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
                    <a href="https://github.com/EduardoRigobeli" target='_blank'><FaGithub /></a>
                    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} target='_blank' aria-label='Enviar Email'><MdEmail /></a>
                    <a href="https://www.instagram.com/rigobeli.dev/" target='_blank'><FiInstagram /></a>
                    <a href="https://www.facebook.com/profile.php?id=61572498851599&locale=pt_BR" target='_blank'><FaFacebook /></a>
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
