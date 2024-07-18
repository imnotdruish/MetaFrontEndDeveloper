import React from 'react';
import styles from './TestimonialsCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@awesome.me/kit-1c29263bf3/icons/classic/solid';

const TestimonialsCard = ({rating, name, img, quote}) =>  {
  return (
    <>
      <div className={styles.testimonial__card}>
        <div className={styles.testimonial__card__rating__user}>
          <div className={styles.testimonial__card__rating}>
            <h2>Rating {rating} of 5 <FontAwesomeIcon icon={faStar} /></h2>
          </div>
          <div className={styles.testimonial__card__user}>
            <img src={img} alt={name} />
            <p className="Name">{name}</p>
          </div>
        </div>
        <div className={styles.testimonial__card__quote}>
          <p className="quote">{quote}</p>
        </div>
      </div>
    </>
  )
}

export default TestimonialsCard