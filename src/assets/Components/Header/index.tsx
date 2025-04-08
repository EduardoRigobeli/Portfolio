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
                    <a href="#">Início</a>
                </li>
                <li className={styles.link}>
                    <a href="#">Características</a>
                </li>
                <li className={styles.link}>
                    <a href="#">Preços</a>
                </li>
                <li className={styles.link}>
                    <a href="#">Sobre</a>
                </li>
            </ul>
            
            <button className={styles.btn}>Contrate me</button>
        </nav>
    </>
  );
}

export default Header;
