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
            </ul>
            
            <a href="https://api.whatsapp.com/send?phone=5544998664234&text=Olá,%20me%20interessei%20no%20seu%20trabalho!" target="_blank"><button className={styles.btn}>Contrate me</button></a>
        </nav>
    </>
  );
}

export default Header;
