import React from 'react'
import styles from './Reservation.module.css';

let inputEle = document.getElementById('time');

function onTimeChange() { 
  let timeSplit = inputEle.value.split(':'),
    hours,
    minutes,
    meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = 'PM';
      hours -= 12;
    } else if (hours < 12 ) {
      meridian = 'AM';
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = 'PM';
    }
}

function Reservation() {
  return (
    <>
      <section className={styles.reservation__section}>
        <div className={styles.reservation__form__container}>
          <form className={styles.reservation__form}>
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
            <label for="date">Date</label>
            <input type="date" id="date" name="date" min="2024-07-01" max="2024-08-31" />
            <label for="time">Time</label>
            <input type="time" id="time" name="time" min="16:00" onChange={onTimeChange()} />
            <small>Reservation Hours are 4:00pm to 9:00pm</small>
            <label for="name">Name for Reservation</label>
            <input name="name" id="name" type="text" />
            <label for="email">Email</label>
            <input name="email" id="email" type="email" />
            <label for="phone">Mobile Number</label>
            <input name="phone" id="phone" type="phone" />
            <button className={styles.reservation__btn} type="button" id="reservation">Make Reservation</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Reservation