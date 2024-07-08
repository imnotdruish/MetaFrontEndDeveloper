import React from 'react'
import styles from './FooterNav.module.css';

function FooterNav() {
  return (
    <>
      <nav className={styles.footernav__bar}>
        <a className={styles.footer__links} href="#Home" alt="Home">Home</a>
        <a className={styles.footer__links} href="#About" alt="About">About</a>
        <a className={styles.footer__links} href="#Menu" alt="Menu">Menu</a>
        <a className={styles.footer__links} href="#Reservations" alt="Reservations">Reservations</a>
        <a className={styles.footer__links} href="#Order" alt="Order Online">Order Online</a>
        <a className={styles.footer__links} href="#Login" alt="Login">Login</a>
      </nav>
    </>
  )
}

export default FooterNav