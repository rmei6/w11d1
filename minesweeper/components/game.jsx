import * as Minesweeper from "./minesweeper.js";
import React from "react";
import ReactDOM from "react-dom";
import Board from "./board.jsx";

class Game extends React.Component {
  constructor(props){
    super(props);
    
    // this.board = new Minesweeper.Board();
    this.state = { board: new Minesweeper.Board(9,10) };
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  render(){
    if (this.state.board.won() || this.state.board.lost()){
      const modal = document.getElementById('modal');
      let screen = document.createElement('div');
      screen.classList.add('modal-screen');
      let content = document.createElement('form');
      content.classList.add("modal-content");
      let label = document.createElement('label');
      label.innerHTML = this.state.board.won() ? "You Won!" : "You Lost!";
      let button = document.createElement('button');
      button.innerHTML = "Play Again";
      button.addEventListener('click',this.restartGame);
      content.appendChild(label);
      content.appendChild(button);
      // debugger;
      modal.appendChild(screen);
      modal.appendChild(content);
    }
    return (
      <div id="main">
        <div id="modal"></div>
        <h1>MineSweeper</h1>
        <p>Click to explore a tile.</p>
        <p>Alt + click to flag tile.</p>
        {<Board array={[{board: this.state.board, callback: this.updateGame}]}/>}
      </div>
    );

  }

  updateGame(tile, flag){
    if(flag){
      tile.toggleFlag();
    }
    else{
      tile.explore();
    }
    this.setState({ board: this.state.board })
  }

  restartGame(){
    this.setState({board: new Minesweeper.Board(9,10)});
  }
}

export default Game;