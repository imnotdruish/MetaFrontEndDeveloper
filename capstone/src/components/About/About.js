import React from 'react'

function About() {
  return (
    <>
      <div className="about__text">
        <h1 className="about__title">Little Lemon</h1>
        <h2 className="about__location">Chicago</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti velit magni qui deleniti saepe error?
          Autem excepturi explicabo similique laudantium maxime, accusantium cupiditate! Autem perferendis vitae provident temporibus nesciunt!
        </p>
      </div>
      <div className="about__images">
        <img src="http://placehold.it/" alt="Image 1" />
        <img src="http://placehold.it/" alt="Image 2" />
      </div>
    </>
  )
}

export default About