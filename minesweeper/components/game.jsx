import {Tile,Board} as Minesweeper from "./minesweeper.js";
import React from "react";
import ReactDOM from "react-dom";
import Board from "./board.jsx";

class Game extends React.Component {
  constructor(props){
    super(props);
    
    // this.board = new Minesweeper.Board();
    this.state = { board: new mineBoard() };
    this.updateGame = this.updateGame.bind(this);

  }

  render(){
    return (
      <div className="main">
        <Board array={[{board: this.state.board, callback: this.updateGame}]}/>
      </div>
    );

  }

  updateGame(){

  }
}

export default Game;