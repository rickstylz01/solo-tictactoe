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

  render() {
    return (
      <div>
        <button className="cross" onClick={() => this.setState({ selected: 'X' })}>X</button>
        <button className="circle" onClick={() => this.setState({ selected: 'O' })}>O</button>
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
              <td><Square /></td>
              <td><Square /></td>
            </tr>
            <tr>
              <td><Square /></td>
              <td><Square /></td>
              <td><Square /></td>
            </tr>
            <tr>
              <td><Square /></td>
              <td><Square /></td>
              <td><Square /></td>
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
