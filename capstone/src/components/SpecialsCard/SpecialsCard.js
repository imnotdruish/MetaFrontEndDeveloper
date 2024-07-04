import React from 'react'

function SpecialsCard() {
  return (
    <>
      <div className="card">
        <img src="http://placehold.it/" alt="Image" />
        <div className="name__price">
          <h2 className="card__title">Item</h2>
          <p className="card__price">$0.00</p>
        </div>
        <p className="card__description">Text</p>
        <p className="card__cta">Order for Delivery <i class="fa-solid fa-moped"></i></p>
      </div>
    </>
  )
}

export default SpecialsCard