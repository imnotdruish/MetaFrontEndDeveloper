import React from 'react'
import styles from './Signup.module.css';
import Logo from './Logo.png';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <>
      <section className={styles.signup__section}>
        <div className={styles.container}>
          <img className={styles.signup__img} src={Logo} alt="Little Lemon Logo" />
          <div className={styles.form}>
            <h1 className={styles.form__heading}>Create Account</h1>
            <form>
              <label for="email" className={styles.form__label}>Email</label>
              <input type="email" id="email" placeholder="Enter your email" className={styles.form__input} />
              <label for="password" className={styles.form__label}>Password</label>
              <input type="password" id="password" placeholder="Enter your password" className={styles.form__input} />
              <label for="password" className={styles.form__label}>Confirm Password</label>
              <input type="password" id="password" placeholder="Re-enter your password" className={styles.form__input} />
              <button className={styles.form__btn}>Create Account</button>
            </form>
            <div className={styles.login}>
              <p>
                Already have an Account? 
                <NavLink 
                  className={styles.login__link}
                  to="/login"
                  style={({ isActive }) => {
                return { 
                  color: isActive ? "#495E57" : "black",
                  fontWeight: isActive ? "bold" : "",
                }
              }}
                >
                  <span> Login</span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login