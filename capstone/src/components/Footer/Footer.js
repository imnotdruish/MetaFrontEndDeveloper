import React from 'react'
import Nav from '../Nav/Nav'
import Logo from './Logo_vertical.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className="footer__logo">
        <img className={styles.footer__img} src={Logo} alt="Logo for Little Lemon" />
      </div>
      <div className="footer__nav">
        <Nav />
      </div>
      <div className="footer__location">
        <ul>
          <li><a href="#Address" alt="Location">Address</a></li>
          <li><a href="#Phone" alt="Phone Number">Phone Number</a></li>
          <li><a href="mailto:email@mail.com" alt="Email">Email</a></li>
        </ul>
      </div>
      <div className="footer__socials">
        <ul>
          <li>
            <a href="https://instagram.com" alt="Instagram">
              <i class="fa-brands fa-instagram"></i> 
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" alt="Facebook">
              <i class="fa-brands fa-facebook"></i> 
              Facebook
            </a>
          </li>
          <li>
            <a href="https://threads.com" alt="Threads">
            <i class="fa-brands fa-threads"></i>
              Threads
            </a>
          </li>
          <li>
            <a href="https://x.com" alt="Twitter">
              <i class="fa-brands fa-x-twitter"></i>
              X
            </a>
          </li>
          <li>
            <a href="https://tiktok.com" alt="TikTok">
              <i class="fa-brands fa-tiktok"></i>
              Tiktok
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer