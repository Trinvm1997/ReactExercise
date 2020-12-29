import './App.css';
import React, { Component, useRef, useState } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       money:0,
//       time:0,
//       interestRate:0,
//       interest:0
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event){
//     event.preventDefault();
//     this.setState({
//       interest: this.state.money*(this.state.time/12)*this.state.interestRate
//     })
//   }

//   render() {
    // return (
    //   <div className="App">
    //     <h1>Lãi suất tiền gửi</h1>
    //     <form>
    //       <div>
    //       <p>Số tiền gửi: </p><input onChange={this.handleChange} name="money" type="number" min="1" step="1"></input><p>$</p>
    //       </div>
    //       <div>
    //       <p>Kì hạn:</p><input onChange={this.handleChange} name="time" type="number" min="1" max="36" step="1"></input><p>tháng</p>
    //       </div>
    //       <div>
    //       <p>Ngày gửi: </p>
    //       <input type="date"></input>
    //       </div>
    //       <div>
    //       <p>Tỉ lệ lãi suất: </p><input onChange={this.handleChange} name="interestRate" type="number" step="0.01"></input><p>%/năm</p>
    //       </div>
    //       <br />
    //       <button onClick={this.handleSubmit}>Tính lãi suất</button>
    //       <p>lãi xuất: {this.state.interest}</p>         
    //     </form>
    //   </div>
    // );
//   }
// }

const App = () => {

  const inputMoney = useRef();
  const inputTime = useRef();
  const inputInterestRate = useRef();
  const [interest,setInterest] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const money = inputMoney.current.valueAsNumber;
    const time = inputTime.current.valueAsNumber;
    const interestRate = inputInterestRate.current.valueAsNumber;
    if(interest !== null){
      setInterest(money*(time/12)*interestRate);
    }
  } 

  return (
    <div className="App">
      <h1>Lãi suất tiền gửi</h1>
      <form>
        <div>
        <p>Số tiền gửi: </p><input ref={inputMoney} type="number" min="1" step="1"></input><p>$</p>
        </div>
        <div>
        <p>Kì hạn:</p><input ref={inputTime} type="number" min="1" max="36" step="1"></input><p>tháng</p>
        </div>
        <div>
        <p>Ngày gửi: </p>
        <input type="date"></input>
        </div>
        <div>
        <p>Tỉ lệ lãi suất: </p><input ref={inputInterestRate} type="number" step="0.01"></input><p>%/năm</p>
        </div>
        <br />
        <button onClick={handleSubmit}>Tính lãi suất</button>
        {interest != null && (<p>lãi xuất: {interest}</p>)}        
      </form>
    </div>
  );
}

export default App;
