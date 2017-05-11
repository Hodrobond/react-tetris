import {isEmptyPosition} from "../utility/board";

var _ = require('lodash');

export const play = () => {
  return(dispatch, getState) => {
    setTimeout(function(){
      var paused = getState().GameState.paused;
      if(!paused){
        handleMove({type:'MOVE_DOWN'})(dispatch, getState);
      }
      play()(dispatch, getState);
    }, 600)
  }
}

export const pause = () => {
  return(dispatch, getState) => {
    var paused = getState().GameState.paused;
    if(!paused){
      dispatch({type: 'PAUSE_GAME'});
    }
    else{
      dispatch({type: 'UNPAUSE_GAME'});
    }
  }
}

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
    }

    var isEmpty = isEmptyPosition(board, currentPiece._piece, currentPiece._rotation, move)
    if(isEmpty){
      dispatch({type: moveType.type,
        board: board});
    }
    else{
      if(moveType.type == "MOVE_DOWN"){
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

function calculateScoreIncrement(board){
  var state = _.cloneDeep(board);
  var length = state[state.length - 1].length;
  var numCleared = 0;
  for(var i = 0; i < state.length; i++){
    for(var j = 0; j < state[i].length; j++){
      if(state[i][j] === false){
        break;
      }
      if(j === state[i].length - 1){
        state.splice(i, 1);
        state.unshift(new Array(state[0].length));
        for(var j = 0; j < state[0].length; j++){
          state[0][j] = false;
        }
        numCleared++;
      }
    }
  }
  var score = Math.pow(2, numCleared) * length;
  return score;
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
