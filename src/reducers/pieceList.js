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
  var heldPiece = null;
  return {
    pieceQueue,
    currentPiece,
    heldPiece
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

  currentPiece._position = action.move;

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

function holdPiece(state){
  var nextPiece = state.pieceQueue.getNext();
  return {
    ...state,
    currentPiece: {
      _piece: nextPiece,
      _position: {
        x: (AppConstants.GAME_WIDTH / 2) - (nextPiece.blocks.length / 2),
        y: 0
      },
      _rotation: 0
    },
    heldPiece: state.currentPiece._piece
  }
}

function replaceHeldPiece(state){
  var held = state.heldPiece;
  var newCurrent = {
    _piece: held,
    _rotation: 0,
    _position: state.currentPiece._position
  }
  return {
    ...state,
    heldPiece: state.currentPiece._piece,
    currentPiece: newCurrent
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
    case 'MOVE_UP':
      return move(state, action);
    case "SHIFT_QUEUE":
      return addPiece(state);
    case 'ROTATE_CLOCKWISE':
      return rotateClockwise(state);
    case 'ROTATE_COUNTERCLOCKWISE':
      return rotateCounterClockwise(state);
    case 'HOLD_PIECE':
      return holdPiece(state);
    case 'REPLACE_HELD_PIECE':
      return replaceHeldPiece(state);
    default:
      return state;
  }
}

export default PieceList;
