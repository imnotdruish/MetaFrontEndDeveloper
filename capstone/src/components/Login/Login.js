import React from 'react'
import styles from './Login.module.css';
import Restaurant from './restaurant.jpg';
import Logo from './Logo.png';

function Login() {
  return (
    <>
      <section className={styles.login__section}>
        <div className={styles.container}>
          <img className={styles.login__img} src={Logo} alt="Little Lemon Logo" />
          <div className={styles.form}>
            <h1 className={styles.form__heading}>Login</h1>
            <form>
              <label for="email" className={styles.form__label}>Email</label>
              <input type="email" id="email" placeholder="Enter your email" className={styles.form__input} />
              <label for="password" className={styles.form__label}>Password</label>
              <input type="password" id="password" placeholder="Enter your password" className={styles.form__input} />
              <button className={styles.form__btn}>Log In</button>
            </form>
            <div className={styles.signup__link}>
              <p>Don't have an Account? <a href="/signup" alt="Link to Create Account Page">Create Account</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login