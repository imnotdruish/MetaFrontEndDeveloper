import React from 'react'
import styles from './Nav.module.css';
import hamburger from './🦆 icon _hamburger menu_.svg';

function Nav() {
  return (
    <>
      <img src={hamburger} alt="nav menu" className={styles.mobile__nav} />
      <nav className={styles.nav__bar + ' ' + styles.desktop__nav}>
        <ul>
          <li><a className="App-link" href="#Home" alt="Home">Home</a></li>
          <li><a className="App-link" href="#About" alt="About">About</a></li>
          <li><a className="App-link" href="#Menu" alt="Menu">Menu</a></li>
          <li><a className="App-link" href="#Reservations" alt="Reservations">Reservations</a></li>
          <li><a className="App-link" href="#Order" alt="Order Online">Order Online</a></li>
          <li><a className="App-link" href="#Login" alt="Login">Login</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav