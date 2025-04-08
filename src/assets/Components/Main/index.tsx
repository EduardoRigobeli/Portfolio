import styles from './main.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function Main() {
    return (
    <>
        <header className={styles.container}>
            <span className={styles.blur}></span>
            <span className={styles.blur}></span>
            
            <div className={styles.content}>
                <h4>CRIE SEU SITE COMO UM PROFISSIONAL</h4>
                <h1>Olá, eu sou o <span>Rigobeli</span>, Desenvolvedor Front-End</h1>
                <p>
                    Seu site não pode ser mais um na multidão. Com desenvolvimento personalizado, performance otimizada e um design que converte visitantes em clientes, seu projeto terá a qualidade de um profissional—sem complicações. <br />Menos templates, mais resultados. Vamos começar?
                </p>
                <button className={styles.btn}>Comece</button>
            </div>

            <div className={styles.image}>
                <img src="header.svg" />
            </div>
        </header>

        <section className={styles.container}>
            <h2 className={styles.header}>Serviços</h2>

            <div className={styles.features}>
                <div className={styles.card}>
                    <h4>Básico</h4>
                    <p>Landing Page Simples</p>
                    <ul>
                        <li><FaCheck className={styles.icon}/> Design responsivo</li>
                        <li><FaCheck className={styles.icon}/> Formulário de Contato</li>
                        <li><FaCheck className={styles.icon}/> Hospedagem</li>
                        <li><FaCheck className={styles.icon}/> 1 revisão</li>
                        <li className={styles.price}><strong>R$ 1.500</strong></li>
                    </ul>

                    <a href='https://api.whatsapp.com/send?phone=5544998664234&text=Olá,%20quero%20o%20pacote%20Landing%20Page!' className={styles.btn_cnt}>Quero esse pacote <FaArrowRight /></a>
                </div>

                <div className={styles.card}>
                    <h4>Intermediário</h4>
                    <p>Site Institucional</p>
                    <ul>
                        <li><FaCheck className={styles.icon}/> 5 a 7 páginas</li>
                        <li><FaCheck className={styles.icon}/> SEO Técnico (Front-End Only)                        </li>
                        <li><FaCheck className={styles.icon}/> Hospedagem</li>
                        <li><FaCheck className={styles.icon}/> 2 revisão</li>
                        <li className={styles.price}><strong>R$ 3.900</strong></li>
                    </ul>

                    <a href='https://api.whatsapp.com/send?phone=5544998664234&text=Olá,%20quero%20o%20pacote%20Landing%20Page!' className={styles.btn_cnt}>Quero esse pacote <FaArrowRight /></a>
                </div>
                <div className={styles.card}>
                    <h4>Personalizado</h4>
                    <p>Sob consulta</p>
                    <ul>
                        <li><FaCheck className={styles.icon}/> E-comerce, sistemas, etc</li>
                        <li><FaCheck className={styles.icon}/> Design exclusivo</li>
                        <li><FaCheck className={styles.icon}/> Funcionalidades avançadas</li>
                        <li><FaCheck className={styles.icon}/> Timeline flexível</li>
                    </ul>

                    <a href='https://api.whatsapp.com/send?phone=5544998664234&text=Olá,%20quero%20o%20pacote%20Landing%20Page!' className={styles.btn_cnt}>Quero esse pacote <FaArrowRight /></a>
                </div>
            </div>
        </section>
    </>
    )
}

export default Main
