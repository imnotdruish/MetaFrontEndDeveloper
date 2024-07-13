import React from 'react'
import styles from './Menu.module.css';
import MenuCard from '../MenuCard/MenuCard';

const menuItems = [
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

function Menu() {
  return (
    <>
    <section className={styles.menu__section}>
      <div className={styles.container}>
        <div className={styles.menu__heading}>
          <h2 className={styles.menu__title}>Our Menu</h2>
        </div>
        <div className={styles.card}>
          {menuItems.map((menu) => (
            <MenuCard
              key={menu.item}
              img={menu.getImgSrc()}
              alt={menu.alt}
              item={menu.item}
              price={menu.price}
              text={menu.text}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Menu