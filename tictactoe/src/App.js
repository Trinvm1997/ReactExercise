import React, {Component, useState} from 'react';
import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       player_turn: "X",
//       board : ["","","","","","","","",""]
//     }
//     this.squareClicked = this.squareClicked.bind(this);
//   }

//   squareClicked(index) {
//     let player_turn = this.state.player_turn;
//     let board = this.state.board;
//     board[index] = player_turn;
//     let winning_combos = [
//       [0,1,2],
//       [3,4,5],
//       [6,7,8],
//       [0,3,6],
//       [1,4,7],
//       [2,5,8],
//       [0,4,8],
//       [2,4,6],
//     ]
//     for(let i=0;i<winning_combos.length;i++) {
//       let winning_row = winning_combos[i]
//       let r1 = winning_row[0]
//       let r2 = winning_row[1]
//       let r3 = winning_row[2]
//       if(board[r1] !== "" && board[r1] === board[r2] && board[r2] === board[r3]){
//         alert(`player ${player_turn} win!`)
//       }
//     }

//     player_turn = (player_turn === "X") ? "O" : "X";
//     this.setState({
//       player_turn: player_turn,
//       board: board
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Tic Tac Toe</h1>
//         <div className="board">
//          {this.state.board.map((square, index)=>{
//            return (<div onClick={()=> this.squareClicked(index)} className="square"><h1 className="symbol">{square}</h1></div>)
//          })}
//         </div>
//       </div>
//     );
//   }
// }

const Square = ({value, onClick}) => {
  return (
    <button style={{width:64,height:64}} onClick={onClick}>
      {value}
    </button>
  )
}

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [myTurn, setMyTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const clickSquare = (value) => {
    if(!squares[value]) squares[value] = myTurn ? "X" : "O";
    setSquares([...squares]);
    setMyTurn((currentValue) => !currentValue);
    const win = calculateWinner(squares);
    if(win) setWinner(win);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return(
    <div>
      {/* <div>
        <Square value={1} onclick={() => clickSquare(1)} />
        <Square value={2} onclick={() => clickSquare(2)} />
        <Square value={3} onclick={() => clickSquare(3)} />

      </div>
      <div>
        <Square value={4} onclick={() => clickSquare(4)} />
        <Square value={5} onclick={() => clickSquare(5)} />
        <Square value={6} onclick={() => clickSquare(6)} />
      </div>
      <div>
        <Square value={7} onclick={() => clickSquare(7)} />
        <Square value={8} onclick={() => clickSquare(8)} />
        <Square value={9} onclick={() => clickSquare(9)} />
      </div> */}
      {[0,1,2].map((i) =>(
        <div key={i} style={{display: "flex"}}>
          {[0,1,2].map((j) => (
            <Square 
            key={i*3+j} 
            value={squares[i*3+j]} 
            onClick={() => clickSquare(i*3+j)} />
          ))}
        </div>
      ))
      }
      {winner && <div>The winner is: {winner}</div>}
    </div>
  )
}

export default App;
