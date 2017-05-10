var PieceQueue = require('../modules/piece-queue');
var AppConstants = require('../constants/constants');
import {isEmptyPosition} from "../utility/board"
var _ = require("lodash");

function init(){
  var pieceQueue = new PieceQueue(4);
  var currentPiece = {
    _piece: pieceQueue.getNext(),
    _rotation: 0,
    _position: {
      x: (AppConstants.GAME_WIDTH / 2) - (pieceQueue.getNext().blocks.length / 2),
      y: 0
    }
  }
  return {
    pieceQueue,
    currentPiece
  }

}

function addPiece(state){
  var newState = _.cloneDeep(state);
  var nextBlock = newState.pieceQueue.getNext();
  newState.currentPiece = {
                              _piece: nextBlock,
                              _position: {
                                x: (AppConstants.GAME_WIDTH / 2) - (nextBlock.blocks.length / 2),
                                y: 0
                              },
                              _rotation: 0
                            };
  return newState;
}

function move(state, action){
  var currentPiece = _.clone(state.currentPiece);

  var move;
  switch(action.type){
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

  currentPiece._position = move;

  return {...state,
          currentPiece: currentPiece};
}

function rotateClockwise(state){
  var piece = _.cloneDeep(state.currentPiece);
  piece._rotation = (piece._rotation + 1 > 3) ? 0 : piece._rotation + 1;
  return {
    ...state,
    currentPiece: piece
  }
}

function rotateCounterClockwise(state){
  var piece = _.cloneDeep(state.currentPiece);
  piece._rotation = (piece._rotation - 1 < 0 ) ? 3 : piece._rotation - 1;
  return {
    ...state,
    currentPiece: piece
  }
}

const PieceList = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  switch(action.type){
    case 'NEW_GAME':
      return init();
    case 'MOVE_LEFT':
    case 'MOVE_RIGHT':
    case 'MOVE_DOWN':
      return move(state, action);
    case "ADD_PIECE":
      return addPiece(state);
    case 'ROTATE_CLOCKWISE':
      return rotateClockwise(state);
    case 'ROTATE_COUNTERCLOCKWISE':
      return rotateCounterClockwise(state);
    default:
      return state;
  }
}

export default PieceList;
