import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: []
    }
  }

  componentDidMount = () => {
    getAllReservations()
      .then(data => this.setState({ allReservations: data }))
  }
  render() {
    console.log(this.state.allReservations);
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
