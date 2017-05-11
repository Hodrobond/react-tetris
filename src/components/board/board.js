import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { newGame } from '../../actions/tetris'
import { handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, handleRotateClockwise, handleRotateCounterClockwise, play, pause } from '../../actions/board'
import Row from "./row";

import './boardStyle.css'

var pieceSetter = require('../../modules/piece-setter');
var _ = require("lodash");

class Board extends React.Component{
  componentDidMount() {
    this.props.newGame();
    this.props.play();
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  handleKeyPress(event){
    var keyCode = event.keyCode;
    if(!this.props.GameState.paused){
      switch(keyCode){
        //left arrow
        case 37:
          this.props.handleMoveLeft();
          break;
        //up arrow
        case 38:
          this.props.handleMoveUp();
          break;
        //right arrow
        case 39:
          this.props.handleMoveRight();
          break;
        //down arrow
        case 40:
          this.props.handleMoveDown();
          break;
        //p
        case 80:
          this.props.pause();
          break;
        //x
        case 88:
          this.props.handleRotateClockwise();
          break;
        //z
        case 90:
          this.props.handleRotateCounterClockwise();
          break;
        default:
          break;
      }
    }
    else{
      //if the game is paused, only allow unpausing
      if(keyCode === 80){
        this.props.pause();
      }
    }
  }

  render() {
    return (
      <div className="board">
        {this.props.Board.map((x, i) =>
          <Row value={x} key={i}/>
        )}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  var piece = state.PieceList.currentPiece;
  var newBoard = _.cloneDeep(state.Board);
  pieceSetter(newBoard)(piece._piece.blocks[piece._rotation], piece._position, piece._piece.className);
  return {
    Board: newBoard,
    PieceList: state.PieceList,
    GameState: state.GameState
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({newGame, handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, handleRotateClockwise, handleRotateCounterClockwise, play, pause}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
