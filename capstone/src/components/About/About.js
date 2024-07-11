import React from 'react';
import Image1 from './Mario and Adrian A.jpg';
import Image2 from './Mario and Adrian b.jpg';
import styles from './About.module.css';

function About() {
  return (
    <>
      <section id="About" className={styles.about__container}>
        <div className={styles.about__text}>
          <h1 className={styles.about__title}>Little Lemon</h1>
          <h2 className={styles.about__location}>Chicago</h2>
          <p className={styles.about__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti velit magni qui deleniti saepe error?
            Autem excepturi explicabo similique laudantium maxime, accusantium cupiditate! Autem perferendis vitae provident temporibus nesciunt!
          </p>
        </div>
        <div className={styles.about__images}>
          <div className={styles.about__image__one}>
            <img src={Image1} alt="Mario and Adrian in the kitchen" />
          </div>
          <div className={styles.about__image__two}>
            <img src={Image2} alt="Mario and Adrian in the kitchen laughing" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About