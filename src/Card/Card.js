import React from 'react';
import './Card.css';

const Card = ( { id, name, date, number, time } ) => {
  return (
    <section className="card">
      <h4>{date}</h4>
      <h4>{id}</h4>
      <h4>{name}</h4>
      <h4>{number}</h4>
      <h4>{time}</h4>
    </section>
  )
}

export default Card