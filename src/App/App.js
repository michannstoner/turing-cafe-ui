import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../apiCalls'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getAllReservations()
      .then(data => this.setState({ allReservations: data }))
      .catch(error => this.setState({ error: 'Something went wrong, try again later!'}))
  }

  createReservation = newReservation => {
    this.setState({ allReservations: [...this.state.allReservations, newReservation]})
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {this.state.error && <h2 className='errorMessage'>{this.state.error}</h2>}
        <div className='resy-form'>
          <Form createReservation={this.createReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.allReservations} />
        </div>
      </div>
    )
  }
}

export default App;
