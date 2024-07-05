import React from 'react'
import Nav from '../Nav/Nav'
import Logo from './Logo_vertical.png';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@awesome.me/kit-1c29263bf3/icons/classic/brands';
import { faFacebook } from '@awesome.me/kit-1c29263bf3/icons/classic/brands';
import { faThreads } from '@awesome.me/kit-1c29263bf3/icons/classic/brands';
import { faXTwitter } from '@awesome.me/kit-1c29263bf3/icons/classic/brands';
import { faTiktok } from '@awesome.me/kit-1c29263bf3/icons/classic/brands';

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
              <FontAwesomeIcon icon={faInstagram} /> 
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" alt="Facebook">
              <FontAwesomeIcon icon={faFacebook} /> 
              Facebook
            </a>
          </li>
          <li>
            <a href="https://threads.com" alt="Threads">
            <FontAwesomeIcon icon={faThreads} />
              Threads
            </a>
          </li>
          <li>
            <a href="https://x.com" alt="Twitter">
              <FontAwesomeIcon icon={faXTwitter} />
              X
            </a>
          </li>
          <li>
            <a href="https://tiktok.com" alt="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
              Tiktok
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer