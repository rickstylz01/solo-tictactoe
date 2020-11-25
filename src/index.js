import React from 'react';
import ReactDOM from 'react-dom';

//function component instead of stateless class
function Square(props) {
  return (
    <button onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    ); 
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    
    return (
      <div>
        <div className="status">{status}</div>
        <table className="table table-bordered table-dark">
          <tbody>
            <tr>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
              <td>{this.renderSquare(3)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
              <td>{this.renderSquare(6)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
              <td>{this.renderSquare(9)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[b] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
