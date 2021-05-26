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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value} )
  }

  makeReservation = event => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      numberOfGuests: this.state.numberOfGuests
    }
    this.props.createReservation(newReservation)

  }

  render() {
    console.log(this.state);
    return (
      <form className='resForm'>
        <input 
          name='name'
          type='text'
          placeholder='Name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          name='date'
          type='text'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input 
          name='time'
          type='text'
          placeholder='Time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input 
          name='numberOfGuests'
          type='number'
          placeholder='Number of guests'
          value={this.state.numberofGuests}
          min='1'
          onChange={event => this.handleChange(event)}
        />
        <button className='makeResButton' onClick={event => this.makeReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}
export default Form 