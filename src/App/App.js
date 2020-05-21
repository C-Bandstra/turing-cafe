import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card'
import CardContainer from '../CardContainer/CardContainer'
import Form from '../Form/Form'
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
        <div className="main-container">
          <Form />
          <CardContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
