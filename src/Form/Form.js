import React, {Component} from 'react';
// import Form from '../Form/Form'
import './Form.css';

class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
        date: '',
        id: '',
        name: '',
        number: '',
        time: ''
      }
    }

    trackInput = (e) => {
      this.setState({[e.target.id]: e.target.value})
    }

    handleReservation = (event) => {
      event.preventDefault()
      this.props.bookReservation(this.state)
      this.setState({
        date: '',
        id: '',
        name: '',
        number: '',
        time: ''
      })
    }

  render() {
    return (
    <section className="form-container">
      <form className="form" onSubmit={this.handleReservation}>
        <input required id="date" value={this.state.date} onChange={this.trackInput} className="form-input" placeholder="Date"/>
        <input required id="name" value={this.state.name} onChange={this.trackInput} className="form-input" placeholder="Name"/>
        <input required id="number" value={this.state.number} onChange={this.trackInput} className="form-input" placeholder="Number of Guests"/>
        <input required id="time" value={this.state.time} onChange={this.trackInput} className="form-input" placeholder="Time"/>
        <button className="form-btn">Book!</button>
      </form>
    </section>  
    ) 
  }
}

export default Form