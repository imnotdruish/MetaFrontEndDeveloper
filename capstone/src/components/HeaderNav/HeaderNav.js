import React from 'react';
import styles from './HeaderNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@awesome.me/kit-1c29263bf3/icons/classic/solid';
import { faX } from '@awesome.me/kit-1c29263bf3/icons/classic/solid';
import { useMenu } from '../../common/MenuContext';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              className={styles.header__nav__link}
              to="/"
              style={({ isActive }) => {
                return { 
                  color: isActive ? "#495E57" : "black",
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                }
              }}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              className={styles.header__nav__link} 
              to="/about"
              style={({ isActive }) => {
                return { 
                  color: isActive ? "#495E57" : "black",
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                }
              }}
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink 
              className={styles.header__nav__link} 
              to="/menu"
              style={({ isActive }) => {
                return { 
                  color: isActive ? "#495E57" : "black",
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                }
              }}
              onClick={toggleMenu}
            >
            Menu
            </NavLink>
            <NavLink
              className={styles.header__nav__link} 
              to="/reservation"
              style={({ isActive }) => {
                return { 
                  color: isActive ? "#495E57" : "black",
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                }
              }}
              onClick={toggleMenu}
              >
              Reservations
            </NavLink>
            <NavLink 
              className={styles.header__nav__link} 
              to="/order"
              style={({ isActive }) => {
                return { 
                  color: isActive ? "#495E57" : "black",
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                }
              }}
              onClick={toggleMenu}
              >
              Order Online
            </NavLink>
            <NavLink
              className={styles.header__nav__link}
              to="/login"
              style={({ isActive }) => {
                return { 
                  color: isActive ? "#495E57" : "black",
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                }
              }}
              onClick={toggleMenu}
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderNav