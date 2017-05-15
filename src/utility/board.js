var AppConstants = require('../constants/constants');

export const isEmptyPosition = (board, piece, rotation, position) => {
  var blocks = piece.blocks[rotation];

  for (var x = 0; x < piece.blocks[0].length; x++) {
    for (var y = 0; y < piece.blocks[0].length; y++) {
      var block = blocks[y][x];
      var boardX = x + position.x;
      var boardY = y + position.y;

      // might not be filled, ya know
      if (block) {
        // make sure it's on the board
        if (boardX >= 0 && boardX < AppConstants.GAME_WIDTH && boardY < AppConstants.GAME_HEIGHT) {
          // make sure it's available
          if (board[boardY][boardX]) {
            // that square is taken by the board already
            return false;
          }
        } else {
          // there's a square in the block that's off the board
          return false;
        }
      }
    }
  }
  return true;
}

export const getPreviewPosition = (board, piece, rotation, position) => {
  console.log(board);
  console.log(piece);
  console.log(rotation);
  console.log(position);
  var isEmpty = true;
  var y = -1;
  while(isEmpty){
    y++;
    isEmpty = isEmptyPosition(board, piece, rotation, {
      x: position.x,
      y: position.y + y
    })
  }

  return (position.y + y - 1);
}
