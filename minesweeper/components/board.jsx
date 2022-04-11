import React from "react";
import ReactDOM from "react-dom";
import Tile from "./tile";

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {board: props.array[0].board, callback: props.array[0].callback};
   
  }
  render(){
    let that = this;
    return (
      <div className="grid">
        {
          this.state.board.grid.map(function(ele,idx){
            return (
              <div className='row' key={idx.toString()}>
              {
                ele.map(function(ele1,idx1){
                  return <Tile key={`[${idx},${idx1}]`} array={[{tile: ele1},{callback: that.state.callback}]}/>
                }
              )}
              </div>
            )

          })
        }
      
      </div> 
    )
  }

}
export default Board;