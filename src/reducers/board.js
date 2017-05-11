var AppConstants = require('../constants/constants');
var pieceSetter = require('../modules/piece-setter');
var pieceList = require("./pieceList");

var _ = require('lodash');

function buildGameRow () {
  var row = new Array(AppConstants.GAME_WIDTH);
  for (var x = 0; x < row.length; x++) {
    row[x] = false;
  }
  return row;
}

function init(){
  var board = new Array(AppConstants.GAME_HEIGHT);
  for (var y = 0; y < board.length; y++) {
    board[y] = buildGameRow();
  }
  var currentPiece = pieceList.default().currentPiece
//  addPiece(board, currentPiece._piece, currentPiece._rotation, currentPiece._position);
  return board;
}

function addPiece(state, piece, rotation, position){
    var newState = _.cloneDeep(state);
    pieceSetter(newState)(piece.blocks[rotation], position, piece.className);
    return newState;
}

function clearRows(state1){
  var state = _.cloneDeep(state1);
  var length = state[state.length - 1].length
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
      }
    }
  }
  return state;
}

const BoardStore = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  switch(action.type){
    case 'NEW_GAME':
      return init(state);
    case "ADD_PIECE":
      return addPiece(state, action.piece, action.rotation, action.position);
    case 'CLEAR_ROWS':
      return clearRows(state);
    default:
      return state
  }
}

export default BoardStore;
