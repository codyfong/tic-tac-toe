import { useState } from "react";
import './App.css';
import Square from "./Square";


function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState(true)
  
  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
}

  const calculateWinner = (array) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    // lines.forEach(line => {
    //   const [a,b,c] = line
    //   if (a && a === b && a === c && b === c) {
    //     let myVar = array[a]
    //   }
    // });
    // return(`${myVar} won`)
    for (let i = 0; i < lines.length; i++){
            const [a,b,c] = lines[i]
      if (array[a] && array[a] === array[b] && array[a] === array[c] && array[b] === array[c]) {
        return(`${array[a]} won`)
      }
    }

    return('who will win?')
  }
  // const propVariable = 'This is a prop'
  return (
    <div className="App">
      <span> 
        {calculateWinner(squares)}
      </span>
      <button onClick={handleClick}>Reset</button>
        <div className="container">
            {squares.map((val, index) => {
                return (
                    <Square
                        setSquares={setSquares}
                        index={index}
                        squareValue={val}
                        squares={squares}
                        player={player}
                        setPlayer={setPlayer}
                    />
                );
            })}
        </div>
    </div>
)
}

export default App;
