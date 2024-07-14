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
  {
    getImgSrc: () => require("./Gyros.jpg"),
    alt: "Gyros",
    item: "Gyros",
    price: "$8.99",
    text: "Lamb seasoned with fresh oregano, lemon, and garlic that is steamed before roasting it on the vertical spit. It's served with fresh vegetables and a tangy yogurt-based tzatziki with fresh dill, cucumbers and a side of fries."
  },
  {
    getImgSrc: () => require("./Spanakopita.jpg"),
    alt: "Spanakopita Pie",
    item: "Spanakopita Pie",
    price: "6.00",
    text: "This savory pie made of flaky thin-layered phyllo dough filled with spinach and feta cheese.",
  },
  {
    getImgSrc: () => require("./Lahem_Meshwi.jpg"),
    alt: "Lahem Meshwi",
    item: "Lahem Meshwi",
    price: "$14.99",
    text: "Grilled lamb kebabs served with tomatoes, onions, and cucumbers. It's served with fresh lemon and a tangy yogurt-based tzatziki.",
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