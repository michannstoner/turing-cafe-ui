import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value} )
  }

  makeReservation = event => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.createReservation(newReservation)
    this.clearForm(event)
  }

  clearForm = event => {
    event.preventDefault()
    this.setState({ name: '', date: '', time: '', number: ''})
  }

  render() {
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
          name='number'
          type='number'
          placeholder='Number of guests'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button className='makeResButton' onClick={event => this.makeReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}
export default Form 