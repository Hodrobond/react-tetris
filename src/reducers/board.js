var AppConstants = require('../constants/constants');

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
  return board;
}

//var _setPiece = pieceSetter(_gameBoard);

const BoardStore = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  switch(action.type){
    case 'NEW_GAME':
      return init();
    default:
      return state
  }
}

export default BoardStore;
