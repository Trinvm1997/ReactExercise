import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputA:0,
      inputB:0,
      inputC:0,
      x1:0,
      x2:0

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

  handleSubmit(event) {
    event.preventDefault();
    if(Math.pow(this.state.inputB,2) - 4*this.state.inputA*this.state.inputC < 0){
      this.setState({
          x1: "undefined",
          x2: "undefined"
        });
    }else{
      this.setState({
      x1: (- this.state.inputB + Math.sqrt(Math.pow(this.state.inputB,2) - 4*this.state.inputA*this.state.inputC))/(2*this.state.inputA),
      x2: (- this.state.inputB - Math.sqrt(Math.pow(this.state.inputB,2) - 4*this.state.inputA*this.state.inputC))/(2*this.state.inputA)
    });
  }
}

  render() {
    return (
      <div className="App">
        <h1>Giải phương trình bậc 2 </h1>
        <form>
          <input type="number" name="inputA" value={this.state.inputA} onChange={this.handleChange}></input>
          <h2>X<sup>2</sup>+</h2>
          <input type="number" name="inputB" value={this.state.inputB} onChange={this.handleChange}></input>
          <h2>X+</h2>
          <input type="number" name="inputC" value={this.state.inputC} onChange={this.handleChange}></input>
          <h2>= 0</h2>
          <button onClick={this.handleSubmit}>Calculate</button>
        </form>
        <h1>Nghiem phuong trinh</h1>
        <p>x1 = {this.state.x1} and x2 = {this.state.x2}</p>
      </div>
    );
  }
}

export default App;
