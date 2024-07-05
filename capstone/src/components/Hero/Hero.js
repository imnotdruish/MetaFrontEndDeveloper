import React from 'react'
import Chef from './restauranfood.jpg';
import styles from './Hero.module.css';

function Hero() {
  return (
    <>
      <div className={styles.hero__container}>
        <div className={styles.hero__background}>
          <div className={styles.hero__text}>
            <h1 className={styles.hero__title}>Little Lemon</h1>
            <h2 className={styles.hero__location}>Chicago</h2>
            <p className={styles.hero__paragraph}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className={styles.reserveBtn}>Reserve a Table</button>
          </div>
        </div>
        <div className={styles.hero__img__container}>
          <div className={styles.hero__img}>
            <img alt="Chef holding stone slab with bruschetta on it" src={Chef} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero