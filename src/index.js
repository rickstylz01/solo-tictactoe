import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    }
  }

  applySelectedCharacter = () => {

  }

  handleCrossClick = () => {
    if(null) {
      this.setState = 'X';
    }
  }

  handleCircleClick = () => {
    if(null) {
      this.setState = 'O'
    }
  }

  render() {
    return (
      <div>
        <button className="cross" onClick={this.handleCrossClick}>
          x
        </button>
        <button className="circle" onClick={this.handleCircleClick}>
          o
        </button>
      </div>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';
    
    return (
      <div>
        <div className="status">{status}</div>
        <table className="table table-bordered table-dark">
          <tbody>
            <tr>
              <td><Square /></td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
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
