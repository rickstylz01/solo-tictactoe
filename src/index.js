import React from 'react';
import ReactDOM from 'react-dom';

//function component instead of stateless class
function Square(props) {
  return (
    <button onclick={props.onClick}>
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
    this.setState({squares: squares});
    xIsNext: !this.state.xIsNext,
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
    const status = 'Next player: X';
    
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
