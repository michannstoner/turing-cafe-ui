import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = ( { reservations }) => {
  const resCards = reservations.map(reservation => {
    return (
      <Card 
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })

  return (
    <div className='cardContainer'>
      {resCards}
    </div>
  )
}

export default Reservations