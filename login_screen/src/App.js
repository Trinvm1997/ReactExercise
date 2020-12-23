import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
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
    if(this.state.username.length <= 0) {
      alert("Please insert your username !")
    }
    else if(this.state.password.length <= 0) {
      alert("Please insert your password !")
    }
    else {
      alert("Login successfully !")
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Login Form </h1>
        <form>  
          <div className="container">   
              <label>Username : </label>   
              <input type="text" onChange={this.handleChange} placeholder="Enter Username" name="username"></input>  
              <label>Password : </label>   
              <input type="password" onChange={this.handleChange} placeholder="Enter Password" name="password"></input> 
              <button type="submit" onClick={this.handleSubmit}>Login</button>     
          </div>   
      </form>  
      </div>
    );
  } 
}

export default App;
