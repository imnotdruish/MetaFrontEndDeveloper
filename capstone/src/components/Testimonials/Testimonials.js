import React from 'react'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import styles from './Testimonials.module.css';

const testimonials = [
  {
    rating: 5,
    name: "Justin A.",
    getImgSrc: () => require('./profile2.jpg'),
    quote: "The place was great, food was great, staff was great. It was just great all around.",
  },
  {
    rating: 4,
    name: "Pedro M.",
    getImgSrc: () => require('./profile3.jpg'),
    quote: "I had the Bruschetta and it was absolutely amazing. Would have been 5, but did have a longer wait then I was hoping.",
  },
  {
    rating: 5,
    name: "Christine L.",
    getImgSrc: () => require('./profile1.jpg'),
    quote: "When with the family for the first time yesterday. We have a wonderful time. There was a decent amount of options and were very helpful with accommodating my daughter's allergies",
  }
]

const Testimonials = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Testimonials</h2>
        </div>
        <div className={styles.testimonial__cards}>
          {testimonials.map((testimonial) => (
            <TestimonialsCard 
              key={testimonial.name}
              rating={testimonial.rating}
              name={testimonial.name}
              img={testimonial.getImgSrc()}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Testimonials
