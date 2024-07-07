import React from 'react';
import styles from './TestimonialsCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@awesome.me/kit-1c29263bf3/icons/classic/solid';
import { faStar } from '@awesome.me/kit-1c29263bf3/icons/classic/solid';

const TestimonialsCard = ({rating, name, quote}) =>  {
  return (
    <>
      <div className={styles.testimonial__card}>
        <div className={styles.testimonial__card__rating}>
          <h2>Rating {rating} of 5 <FontAwesomeIcon icon={faStar} /></h2>
        </div>
        <div className={styles.testimonial__card__user}>
          <FontAwesomeIcon icon={faUser} className={styles.testimonial__card__user__icon} />
          <p className="Name">{name}</p>
        </div>
        <div className={styles.testimonial__card__quote}>
          <p className="quote">{quote}</p>
        </div>
      </div>
    </>
  )
}

export default TestimonialsCard