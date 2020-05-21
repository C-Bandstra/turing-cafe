import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ reservations }) => {
  const currentReservations = reservations.map(resy => {
    return <Card key={resy.id} {...resy} />
  })

  return (
    <section className="card-container">
      {currentReservations}
    </section>
  )
}

export default CardContainer