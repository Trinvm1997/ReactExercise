import React, {Component} from 'react';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      player_turn: "X",
      board : ["","","","","","","","",""]
    }
    this.squareClicked = this.squareClicked.bind(this);
  }

  squareClicked(index) {
    let player_turn = this.state.player_turn;
    let board = this.state.board;
    board[index] = player_turn;
    let winning_combos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i=0;i<winning_combos.length;i++) {
      let winning_row = winning_combos[i]
      let r1 = winning_row[0]
      let r2 = winning_row[1]
      let r3 = winning_row[2]
      if(board[r1] !== "" && board[r1] === board[r2] && board[r2] === board[r3]){
        alert(`player ${player_turn} win!`)
      }
    }

    player_turn = (player_turn === "X") ? "O" : "X";
    this.setState({
      player_turn: player_turn,
      board: board
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className="board">
         {this.state.board.map((square, index)=>{
           return (<div onClick={()=> this.squareClicked(index)} className="square"><h1 className="symbol">{square}</h1></div>)
         })}
        </div>
      </div>
    );
  }
}

export default App;
