import React from 'react'

const Cards = ({ id, name, date, time, number }) => {
  return (
    <article className='res-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
    </article>
  )
}

export default Cards