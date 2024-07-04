import React from 'react'
import Chef from './restauranfood.jpg';
import styles from './Hero.module.css';

function Hero() {
  return (
    <>
      <div className={styles.hero__container}>
        <h1 className={styles.hero__title}>Little Lemon</h1>
        <h2 className={styles.hero__location}>Chicago</h2>
        <p className={styles.hero__paragraph}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className={styles.reserveBtn}>Reserve a Table</button>
        <img className={styles.hero__img} alt="Chef holding stone slab with bruschetta on it" src={Chef} />
      </div>
    </>
  )
}

export default Hero