import React from "react";
import styles from './SideMenu.module.css';

const SideMenu = ({ hideSidebar, isOpen }) => {
  return (
    <nav className={`${styles.sideMenu} ${isOpen ? styles.sideMenuOpen : ''}`}>
      <a className={styles.exit} onClick={hideSidebar}>
        <i className="fa-solid fa-xmark"></i>
      </a>

      <ul className={styles.menuList}>
        <li className={styles.li}>
          <a href="/">
            <div className={styles.icon}>
              <i className="fa-solid fa-house"></i>
            </div>
            <span>Home</span>
          </a>
        </li>

        <li className={styles.li}>
          <a href="/login">
            <div className={styles.icon}>
              <i className="fa-solid fa-user"></i>
            </div>
            <span>Minha Conta</span>
          </a>
        </li>

        <li className={styles.expandLi}>
          <label className={styles.li} htmlFor="matBtn">
            <div className={styles.icon}>
              <i className="fa-solid fa-book"></i>
            </div>
            <span>Matérias</span>
            <i className={`fas fa-caret-down ${styles.expandIcon}`} id="expandIcon"></i>
          </label>

          <input type="checkbox" id="matBtn" className={styles.hiddenCheckbox} />
          <ul className={styles.subList}>
            <li>
              <a href="/materias/matematica">Matemática</a>
            </li>
            <li>
              <a href="/materias/portugues">Português</a>
            </li>
            <li>
              <a href="/materias/historia">História</a>
            </li>
            <li>
              <a href="/materias/quimica">Química</a>
            </li>
            <li>
              <a href="/materias/biologia">Biologia</a>
            </li>
            <li>
              <a href="/materias/geografia">Geografia</a>
            </li>
          </ul>
        </li>

        <li className={styles.li}>
          <a href="/sobre">
            <div className={styles.icon}>
              <i className="fa-solid fa-info"></i>
            </div>
            <span>Sobre</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
