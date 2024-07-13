import React from 'react'
import styles from './Reservation.module.css';

function Reservation() {
  return (
    <>
      <section className={styles.reservation__section}>
        <div className={styles.reservation__form__container}>
          <form className={styles.reservation__form}>
            <div className={styles.reservation__persons}>
              <div className={styles.reservation__adults}>
                <label for="adults">Adults</label>
                <select name="adults" id="adults">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className={styles.reservation__children}>
                <label for="children">Children</label>
                <select name="children" id="children">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className={styles.reservation__date__time}>
              <div className={styles.reservation__date}>
                <label for="date">Date</label>
                <input type="date" id="date" name="date" min="2024-07-01" max="2024-08-31" />
              </div>
              <div className={styles.reservation__time}>
                <label for="time">Time</label>
                <input type="time" id="time" name="time" min="16:00" />
                <small>Reservation Hours are 4:00pm to 9:00pm</small>
              </div>
            </div>
            <div className={styles.reservation__visitors__information}>
              <div className={styles.reservation__visitors__name}>
                <label for="name">Name for Reservation</label>
                <input name="name" id="name" type="text" />
              </div>
              <div className={styles.reservation__visitors__email}>
                <label for="email">Email</label>
                <input name="email" id="email" type="email" />
              </div>
              <div className={styles.reservation__visitors__phone}>
                <label for="phone">Mobile Number</label>
                <input name="phone" id="phone" type="phone" />
              </div>
            </div>
            <div className={styles.reservation__button}>
              <button className={styles.reservation__btn} type="button" id="reservation">Make Reservation</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Reservation