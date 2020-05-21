import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css';

const CardContainer = ({ reservations }) => {
  const currentReservations = reservations.map(resy => {
    return <Card {...resy} />
  })
  
  return (
    <section>
      {currentReservations}
    </section>
  )
}

export default CardContainer