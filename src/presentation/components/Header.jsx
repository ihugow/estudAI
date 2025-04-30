import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css'
import { EstudAINav } from './EstudAI';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({ onMenuClick }) => {

  const { user, loading } = useAuth();

  const navigate = useNavigate();

  const irParaLogin = () => {
    navigate('/login');
  };

  if (loading) {
    return null;
  }

  return (
    <nav className={styles.header}>
      <div className={styles.headerNav}>
        <EstudAINav/>

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

          {user ? (
            <img
            src={user.photoURL || "https://via.placeholder.com/40"}
            alt="Perfil"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => navigate("/profile")}
          />
          ) : (
            <button className={`${styles.join} cursor-pointer`} onClick={irParaLogin}>Entrar</button> 

          )}

          <div className={styles.menu}>
            <button onClick={onMenuClick} className={styles.menuIcon}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>     
    </nav>
  )
}

export default Header