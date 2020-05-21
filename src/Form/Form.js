import React, {Component} from 'react';
// import Form from '../Form/Form'
import './Form.css';

class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
        date: '',
        id: null,
        name: '',
        number: 0,
        time: ''
      }
    }

    trackInput = (e) => {
      this.setState({[e.target.id]: e.target.value})
    }

    handleReservation = (event) => {
      event.preventDefault()
      this.props.bookReservation(this.state)
    }

  render() {
    return (
    <section className="form-container">
      <form onSubmit={this.handleReservation}>
        <input required id="name" onChange={this.trackInput} className="name-input" placeholder="Name"/>
        <input required id="date" onChange={this.trackInput} className="date-input" placeholder="Date"/>
        <input required id="time" onChange={this.trackInput} className="time-input" placeholder="Time"/>
        <input required id="number" onChange={this.trackInput} className="number-input" placeholder="Number of Guests"/>
        <button>Book!</button>
      </form>
    </section>  
    ) 
  }
}

export default Form