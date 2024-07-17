import React from 'react'
import styles from './Order.module.css';

function Order() {
  return (
    <>
      <section className={styles.orders}>
        <div className={styles.order__container}>
          <div className={styles.order__heading}>
            <h2>Order</h2>
          </div>
          <div className={styles.order__button}>
            <button className={styles.order__btn}>Go to Checkout</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Order