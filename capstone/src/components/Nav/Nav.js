import React from 'react'
import styles from './Nav.module.css';

function Nav() {
  return (
    <>
      <nav className={styles.nav__bar}>
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