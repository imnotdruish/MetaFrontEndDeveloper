import React from 'react'
import Logo from './Logo.png';
import HeaderNav from '../HeaderNav/HeaderNav';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <div className={styles.header}>
        <img className={styles.header__img} src={Logo} alt="Little Lemon Logo" />
        <HeaderNav />
      </div>
    </>
  )
}

export default Header