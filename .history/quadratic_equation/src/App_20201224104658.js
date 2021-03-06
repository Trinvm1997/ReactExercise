import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputA:0,
      inputB:0,
      inputC:0,
      result:""

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
    if(this.state.inputA === 0) {
      this.setState({
        result: `Phương trình có một nghiệm đơn x = ${-this.state.inputC/this.state.inputB}`
      })
    } 
    else if(Math.pow(this.state.inputB,2) - 4*this.state.inputA*this.state.inputC < 0){
      this.setState({
        result: "Phương trình vô nghiệm"    
      });
    }
    else if(Math.pow(this.state.inputB,2) - 4*this.state.inputA*this.state.inputC === 0){
      this.setState({
        result: `Phương trình có một nghiệm kép X = ${-this.state.inputB/(2*this.state.inputA)}`
      })
    }
    else{
      this.setState({
        result: `Phương trình có hai nghiệm phân biệt 
        x1 = ${(- this.state.inputB + Math.sqrt(Math.pow(this.state.inputB,2) - 4*this.state.inputA*this.state.inputC))/(2*this.state.inputA)}
        và x2 = ${(- this.state.inputB - Math.sqrt(Math.pow(this.state.inputB,2) - 4*this.state.inputA*this.state.inputC))/(2*this.state.inputA)}`
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
          <button onClick={this.handleSubmit}>Tính</button>
        </form>
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default App;
