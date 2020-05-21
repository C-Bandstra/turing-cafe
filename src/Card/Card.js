import React from 'react';
import './Card.css';

const Card = ( { id, name, date, number, time } ) => {
  return (
    <section className="card">
      <h3 className="card-header">Reservation</h3>
      <h4>Date: {date}</h4>
      <h4>Guest ID: {id}</h4>
      <h4>Name: {name}</h4>
      <h4>Number: {number}</h4>
      <h4>Time: {time}</h4>
    </section>
  )
}

export default Card