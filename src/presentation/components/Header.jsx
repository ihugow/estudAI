import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/global/logo.png';

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.headerNav}>
        <a className={styles.mindtradeLogo}>
          <img
            src={logo}
            alt="A imagem apresenta um logotipo em estilo minimalista com tons em degradê de azul e ciano. No centro, vemos o perfil de uma cabeça humana voltada para a direita, com um cérebro em destaque, representando o conhecimento. De dentro da cabeça parte uma seta, direcionada para fora, simbolizando o ato de compartilhar. Ao fundo, parcialmente envolvido pela seta e pelo contorno da cabeça, está o globo terrestre, representando a comunidade global. O design transmite a ideia de que o conhecimento individual pode — e deve — ser compartilhado com o mundo, promovendo conexão, evolução coletiva e impacto positivo. A estética suave, moderna e translúcida reforça uma identidade visual voltada à inovação, colaboração e transformação por meio do saber."
          />
          <span className="glbLogoTitle hidden sm:inline">
              Estud<span className="glbSpanGrad">AI</span>
            </span>
        </a>

        <div className={styles.headerButtons}>
          <div className={styles.searchBox}>
            <input
              className={styles.searchTxt}
              type="text"
              name=""
              placeholder="Pesquisar"
            />
            <a href="#" className={styles.searchBtn}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>

          <a className={styles.join}>Entrar</a>

          <div className={styles.menu}>
            <a className={styles.menuIcon}>
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>
        </div>
      </div>     
    </nav>
  )
}

export default Header