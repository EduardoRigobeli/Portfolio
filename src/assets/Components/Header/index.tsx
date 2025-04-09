import styles from "./header.module.css";

function Header() {
  return (
    <>
        <nav>
            <a href="#">
                <img src="../public/Letter R for Business Logo.png" />  
            </a>

            <ul className={styles.nav_links}>
                <li className={styles.link}>
                    <a href="#inicio">Início</a>
                </li>
                <li className={styles.link}>
                    <a href="#servicos">Serviços</a>
                </li>
                <li className={styles.link}>
                    <a href="#works">Works</a>
                </li>
                <li className={styles.link}>
                    <a href="#sobre">Sobre</a>
                </li>
            </ul>
            
            <button className={styles.btn}>Contrate me</button>
        </nav>
    </>
  );
}

export default Header;
