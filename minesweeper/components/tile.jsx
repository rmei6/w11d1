import React from "react";
import ReactDOM from "react-dom";

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = {tile: props.array[0].tile , callback: props.array[1].callback, symbol: 'T'};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){

    let flag = false;
    if(e.altKey){
      if (this.state.symbol === '🚩'){
        this.setState({ symbol: 'T' });
        e.target.classList.remove('flagged');
      }else{
        this.setState({ symbol: '🚩' });
        e.target.classList.add('flagged');
      }
      flag = true;
    }
    else {
      if (this.state.tile.bombed){
        this.setState({symbol: '☢'});
        e.target.classList.add('bombed');
      }
      else if (this.state.tile.adjacentBombCount() > 0){
        this.setState({ symbol: this.state.tile.adjacentBombCount().toString()});
        e.target.classList.add('revealed');
      }
      else{
        this.setState({ symbol: '_' });
        e.target.classList.add('revealed');
      }
      e.target.classList.add('explored');
    }
  this.state.callback(this.state.tile, flag);
  }


  render(){
    // debugger;
    return (
      <div className="tile" onClick={this.handleClick}>{this.state.symbol}</div>
    )
  }
}

export default Tile;