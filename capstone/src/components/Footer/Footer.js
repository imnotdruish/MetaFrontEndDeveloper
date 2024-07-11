import React from 'react'
import FooterNav from '../FooterNav/FooterNav'
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
      <footer>
        <div className={styles.footer__logo}>
          <img className={styles.footer__img} src={Logo} alt="Logo for Little Lemon" />
        </div>
        <div className={styles.footer__nav}>
          <h2>Navigation</h2>
          <FooterNav />
        </div>
        <div className={styles.footer__location}>
          <h2>Contact</h2>
          <a 
            href="#Address" 
            alt="Location"
          >
            123 Main St. <br /> Chicago, IL 60690
          </a>
          <a 
            href="tel:312-555-5555"
            alt="Phone Number for Little Lemon"
          >
            312-555-5555
          </a>
          <a 
            href="mailto:contact@littlelemon.com" 
            alt="Email"
          >
            contact@littlelemon.com
          </a>
        </div>
        <div className={styles.footer__socials}>
          <h2>Socials</h2>
          <div className={styles.footer__socials__links}>
            <a href="https://instagram.com" alt="Instagram">
              <FontAwesomeIcon icon={faInstagram} /> 
              <span>
                Instagram
              </span>
            </a>
            <a href="https://facebook.com" alt="Facebook">
              <FontAwesomeIcon icon={faFacebook} /> 
              <span>
                Facebook
              </span>
            </a>
            <a href="https://threads.com" alt="Threads">
              <FontAwesomeIcon icon={faThreads} />
              <span>
                Threads
              </span>
            </a>
            <a href="https://x.com" alt="Twitter">
              <FontAwesomeIcon icon={faXTwitter} />
              <span>
                X (Formally Twitter)
              </span>
            </a>
            <a href="https://tiktok.com" alt="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
              <span>
                Tiktok
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer