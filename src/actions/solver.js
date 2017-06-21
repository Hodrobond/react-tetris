import Solver from '../utility/solver';
import {isEmptyPosition} from "../utility/board";
import {handleMove, handleRotateClockwise, handleRotateCounterClockwise, } from './pieceList'
var _ = require('lodash');

export const solve = () => {
  return(dispatch, getState) => {
    var isSolving = getState().Solver.isSolving;
    var gameOver = getState().GameState.gameOver;
    var paused = getState().GameState.paused;
    //ew, this is wrong
    if(paused){
      setTimeout(function(){
        solve()(dispatch, getState);
      }, 1000);
    }
    else if(isSolving && !gameOver){
      var board = getState().Board;
      var currentPiece = _.cloneDeep(getState().PieceList.currentPiece);
      var solver = new Solver();
      var moves = solver.getMoveList(board, currentPiece);
      while(moves.moveList.length > 0){
        var move = moves.moveList.shift();
        switch(move){
          case "MOVE_UP":
          case "MOVE_DOWN":
          case "MOVE_LEFT":
          case "MOVE_RIGHT":
            handleMove({type: move})(dispatch, getState);
            break;
          case "ROTATE_CLOCKWISE":
            handleRotateClockwise()(dispatch, getState);
            break;
          case "ROTATE_COUNTERCLOCKWISE":
            handleRotateCounterClockwise()(dispatch, getState);
            break;
        }
      }
      setTimeout(function(){
        handleMove({type:'MOVE_UP'})(dispatch, getState);
        handleMove({type:'MOVE_DOWN'})(dispatch, getState);
        setTimeout(function(){
          solve()(dispatch, getState);
        }, 1000);
      }, 250)
    }
  }
}

export const toggleSolving = () => {
  return(dispatch, getState) => {
    dispatch({type:'TOGGLE_SOLVING'});
    solve()(dispatch, getState);
  }
}
