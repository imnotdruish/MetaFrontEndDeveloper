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
            Welcome to Little Lemon Chicago! We are a friendly family-owned Mediterranean restaurant, where we bring you traditional recipes with a modern twist. Indulge in our flavorful Bruschetta, crisp Greek Salad, and perfectly paired wines. Our goal is to create a warm and inviting atmosphere for everyone to enjoy. 
          </p>
          <p className={styles.about__description}>
            Whether you're a food enthusiast or simply looking for a delicious meal, our menu has something for you.Join us for a culinary experience that will tantalize your taste buds and leave you coming back for more. Come visit us and be a part of the Little Lemon Chicago family today.
          </p>
        </div>
        <div className={styles.about__images}>
          <div className={styles.about__image__one}>
            <img className={styles.fade_in} src={Image1} alt="Mario and Adrian in the kitchen" />
          </div>
          <div className={styles.about__image__two}>
            <img className={styles.fade_in} src={Image2} alt="Mario and Adrian in the kitchen laughing" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About