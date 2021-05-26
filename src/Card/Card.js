import React from 'react'

const Cards = ({ id, name, date, time, number }) => {
  return (
    <article className='resCard'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button className='cancelButton'>Cancel</button>
    </article>
  )
}

export default Cards