import React from 'react';
import styles from './HeaderNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@awesome.me/kit-1c29263bf3/icons/classic/solid';
import { faX } from '@awesome.me/kit-1c29263bf3/icons/classic/solid';
import { useMenu } from '../../common/MenuContext';

function HeaderNav() {

  // to change classes
  const { menu, toggleMenu } = useMenu();
  const menuIcon = menu === 'hidden' ? faBars : faX;

  return (
    <>
      <nav className={styles.header__nav}>
        <div className={styles.burger__menu}>
          <FontAwesomeIcon 
            icon={menuIcon}
            alt="Burger Menu Icon"
            onClick={toggleMenu}
          />
        </div>
      </nav>
      <div className={`${menu === 'hidden' ? styles.hidden : styles.visible}`}>
        <div className={styles.menu}>
          <div className={styles.header__nav__links}>
            <a className={styles.header__nav__link} href="#Home" alt="Home">Home</a>
            <a className={styles.header__nav__link} href="#About" alt="About">About</a>
            <a className={styles.header__nav__link} href="#Menu" alt="Menu">Menu</a>
            <a className={styles.header__nav__link} href="#Reservations" alt="Reservations">Reservations</a>
            <a className={styles.header__nav__link} href="#Order" alt="Order Online">Order Online</a>
            <a className={styles.header__nav__link} href="#Login" alt="Login">Login</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderNav