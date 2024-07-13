import React from 'react'
import styles from './MenuCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoped } from '@awesome.me/kit-1c29263bf3/icons/classic/solid';

const MenuCard = ({img, alt, item, price, text }) => {

  return (
    <>
      <div className={styles.card}>
        <img src={img} alt={alt} />
        <div className={styles.name__price}>
          <h2 className={styles.card__title}>{item}</h2>
          <p className={styles.card__price}>{price}</p>
        </div>
        <p className={styles.card__description}>{text}</p>
        <p className={styles.card__cta}>Order for Delivery <FontAwesomeIcon icon={faMoped}></FontAwesomeIcon></p>
      </div>
    </>
  )
}

export default MenuCard