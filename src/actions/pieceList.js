var AppConstants = require('../constants/constants');
import {isEmptyPosition, getPreviewPosition} from "../utility/board";
import {calculateScoreIncrement} from './score';

var _ = require('lodash');

export const handleMove = (moveType) => {
  return(dispatch, getState) => {
    let pieceList = getState().PieceList;
    var currentPiece = pieceList.currentPiece;
    var board = getState().Board;

    var move;
    switch(moveType.type){
      case "MOVE_LEFT":
        move = {x: currentPiece._position.x - 1, y: currentPiece._position.y};
        break;
      case "MOVE_RIGHT":
        move = {x: currentPiece._position.x + 1, y: currentPiece._position.y};
        break;
      case "MOVE_DOWN":
        move = {x: currentPiece._position.x, y: currentPiece._position.y + 1}
        break;
      case "MOVE_UP":
        var newY = getPreviewPosition(board, currentPiece._piece, currentPiece._rotation, currentPiece._position);
        move = {x: currentPiece._position.x, y: newY}
        break;
    }

    var isEmpty = isEmptyPosition(board, currentPiece._piece, currentPiece._rotation, move)
    if(isEmpty){
      dispatch({type: moveType.type,
        board: board,
        move: move});
    }
    else{
      if(moveType.type == "MOVE_DOWN"){
        var isStartEmpty = isEmptyPosition(board,
                                            pieceList.pieceQueue.queue[0],
                                            0,
                                            {
                                              x: (AppConstants.GAME_WIDTH / 2) - (pieceList.pieceQueue.queue[0].blocks.length / 2),
                                              y: 0
                                            }
                                          );
        if(!isStartEmpty){
          dispatch({type: "END_GAME"});
        }
        else{
          dispatch({type: "SHIFT_QUEUE"});
          dispatch({type: "ADD_PIECE",
            piece: currentPiece._piece,
            rotation: currentPiece._rotation,
            position: currentPiece._position
          });
          var scoreIncrement = calculateScoreIncrement(board);
          var score = getState().Score.currentScore;
          var highScore = getState().Score.highScore;
          dispatch({type: "SCORE_INCREMENT", value: score + scoreIncrement});
          if(score + scoreIncrement > highScore){
            dispatch({type: "HIGH_SCORE_INCREMENT", value: score + scoreIncrement});
          }
          dispatch({type: "CLEAR_ROWS"});
        }
      }
    }
  }
}

export const handleMoveUp = () => {
  return(dispatch, getState) => {
    handleMove({type:'MOVE_UP'})(dispatch, getState);
  }//return(dispatch, getState)
}

export const handleMoveRight = () => {
  return(dispatch, getState) => {
    handleMove({type:'MOVE_RIGHT'})(dispatch, getState);
  }
}

export const handleMoveDown = () => {
  return(dispatch, getState) => {
    handleMove({type:'MOVE_DOWN'})(dispatch, getState);
  }
}

export const handleMoveLeft = () => {
  return(dispatch,getState) => {
    handleMove({type:'MOVE_LEFT'})(dispatch, getState);
  }
}

export const handleRotateClockwise = () => {
  return(dispatch,getState) => {
    let pieceList = getState().PieceList;
    var currentPiece = _.cloneDeep(pieceList.currentPiece);
    var board = getState().Board;
    var rotation = (currentPiece._rotation + 1 > 3) ? 0 : currentPiece._rotation + 1;
    var isEmpty = isEmptyPosition(board, currentPiece._piece, rotation, currentPiece._position)
    if(isEmpty){
      dispatch({type:'ROTATE_CLOCKWISE'});
    }
  }
}

export const handleRotateCounterClockwise = () => {
  return(dispatch,getState) => {
    let pieceList = getState().PieceList;
    var currentPiece = _.cloneDeep(pieceList.currentPiece);
    var board = getState().Board;
    var rotation = (currentPiece._rotation - 1 < 0 ) ? 3 : currentPiece._rotation - 1;
    var isEmpty = isEmptyPosition(board, currentPiece._piece, rotation, currentPiece._position)
    if(isEmpty){
      dispatch({type:'ROTATE_COUNTERCLOCKWISE'});
    }
  }
}

export const handleHold = () => {
  return(dispatch,getState) => {

    var isHeldPiece = getState().PieceList.heldPiece;
    if(isHeldPiece != null){
      dispatch({type: 'REPLACE_HELD_PIECE'});
    }
    else{
      dispatch({type: 'HOLD_PIECE'});
    }
  }
}
