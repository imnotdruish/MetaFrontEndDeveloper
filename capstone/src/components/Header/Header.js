import React from 'react'
import Logo from './Logo.png';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <div className={styles.header}>
        <img className={styles.header__img} src={Logo} alt="Little Lemon Logo" />
        <Nav />
      </div>
    </>
  )
}

export default Header