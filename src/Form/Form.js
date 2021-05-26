import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: 0
    }
  }

  render() {
    return (
      <form className='resForm'>
        <input 
          name='name'
          type='text'
          placeholder='Name'
          value={this.state.name}
        />
        <input
          name='date'
          type='text'
          placeholder='Date (mm/dd)'
          value={this.state.date}
        />
        <input 
          name='time'
          type='text'
          placeholder='Time'
          value={this.state.time}
        />
        <input 
          name='numberOfGuests'
          type='number'
          placeholder='Number of guests'
          value={this.state.numberofGuests}
        />
      </form>
    )
  }
}
export default Form 