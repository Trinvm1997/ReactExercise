import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money:0,
      time:0,
      interestRate:0,
      interest:0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      interest: this.state.money*(this.state.time/12)*this.state.interestRate
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Lãi suất tiền gửi</h1>
        <form>
          
          <div style={{display: "inline-flex"}}>
          <p>so tien gui</p><input onChange={this.handleChange} name="money" type="number" min="1" step="1"></input><i>$</i>
          </div>
          <p>ki han</p>
          <div style={{display: "inline-flex"}}>
            <input onChange={this.handleChange} name="time" type="number" min="1" max="36" step="1"></input><p>thang</p>
          </div>
          <p>ngay gui</p>
          <input type="date"></input>
          <p>lai suat</p>
          <div style={{display: "inline-flex"}}>
            <input onChange={this.handleChange} name="interestRate" type="number" step="0.01"></input><p>%/nam</p>
          </div>
          <br />
          <button onClick={this.handleSubmit}>Calculate</button>
          <p>lai suat: {this.state.interest}</p>         
        </form>
      </div>
    );
  }
}

export default App;
