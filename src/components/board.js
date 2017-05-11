import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { newGame } from '../actions/tetris'
import { handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, handleRotateClockwise, handleRotateCounterClockwise } from '../actions/board'
import Row from "./row";

import './boardStyle.css'

var pieceSetter = require('../modules/piece-setter');
var _ = require("lodash");

class Board extends React.Component{
  componentDidMount() {
    this.props.newGame();

    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  handleKeyPress(event){
    var keyCode = event.keyCode;
    switch(keyCode){
      //left
      case 37:
        this.props.handleMoveLeft();
        break;
      //up
      case 38:
        this.props.handleMoveUp();
        break;
      //right
      case 39:
        this.props.handleMoveRight();
        break;
      //down
      case 40:
        this.props.handleMoveDown();
        break;
      case 88:
        this.props.handleRotateClockwise();
        break;
      case 90:
        this.props.handleRotateCounterClockwise();
        break;
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
    PieceList: state.PieceList
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({newGame, handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, handleRotateClockwise, handleRotateCounterClockwise}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
