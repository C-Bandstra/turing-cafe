import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card'
import CardContainer from '../CardContainer/CardContainer'
import { fetchReservations } from '../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    this.getReservations()
  }

  getReservations = async () => {
    this.setState({reservations: await fetchReservations()})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <CardContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
