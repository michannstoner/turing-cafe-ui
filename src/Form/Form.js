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
      </form>
    )
  }
}
export default Form 