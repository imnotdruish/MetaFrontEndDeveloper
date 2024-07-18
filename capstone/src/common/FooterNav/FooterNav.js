import React from 'react'
import styles from './FooterNav.module.css';
import { NavLink } from 'react-router-dom';

function FooterNav() {
  return (
    <>
      <nav className={styles.footernav__bar}>
      <NavLink
              className={styles.header__nav__link}
              to="/"
            >
              Home
            </NavLink>
            <NavLink 
              className={styles.header__nav__link} 
              to="/about"
            >
              About
            </NavLink>
            <NavLink 
              className={styles.header__nav__link} 
              to="/menu"
            >
            Menu
            </NavLink>
            <NavLink
              className={styles.header__nav__link} 
              to="/reservation"
              >
              Reservations
            </NavLink>
            <NavLink 
              className={styles.header__nav__link} 
              to="/order"
              >
              Order Online
            </NavLink>
            <NavLink
              className={styles.header__nav__link}
              to="/login"
            >
              Login
            </NavLink>
      </nav>
    </>
  )
}

export default FooterNav