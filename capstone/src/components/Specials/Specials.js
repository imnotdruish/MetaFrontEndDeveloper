import React from 'react'
import SpecialsCard from '../SpecialsCard/SpecialsCard';
import styles from './Specials.module.css';


const specials = [
  {
    getImgSrc: () => require("./greek salad.jpg"),
    alt: "Greek Salad",
    item: "Greek Salad",
    price: "$12.99",
    text: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    getImgSrc: () => require("./bruschetta.jpg"),
    alt: "Bruschetta",
    item: "Bruschetta",
    price: "$5.99",
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    getImgSrc: () => require("./lemon dessert.jpg"),
    alt: "Lemon Dessert",
    item: "Lemon Dessert",
    price: "$5.00",
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  },
];

const Specials = () => {
  return (
    <>
    <section className={styles.container}>
      <div className={styles.special__heading}>
        <h2 className={styles.special__title}>This Week's Specials</h2>
        <button className={styles.orderBtn}>Order Online</button>
      </div>
      <div className={styles.card}>
        {specials.map((special) => (
          <SpecialsCard
            key={special.item}
            img={special.getImgSrc()}
            alt={special.alt}
            item={special.item}
            price={special.price}
            text={special.text}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default Specials;