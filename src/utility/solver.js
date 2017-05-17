//https://codemyroad.wordpress.com/2013/04/14/tetris-ai-the-near-perfect-player/
import PieceList from '../reducers/pieceList';
import Board from '../reducers/board';
import {getPreviewPosition, isEmptyPosition} from './board'
var _ = require('lodash');

function Solver () {

}

Solver.prototype.traverseSide = function(board, currentPiece, isLeft){
  var highestHeuristic = -9999;
  var bestPos = {};
  var startPiece = _.cloneDeep(currentPiece);
  var move = isLeft ? {x: currentPiece._position.x - 1, y: currentPiece._position.y} : {x: currentPiece._position.x + 1, y: currentPiece._position.y};

  var isSideEmpty = isEmptyPosition(board, currentPiece._piece, currentPiece._rotation, move)
  var constraint = isLeft ? (move.x >= -1) : (move.x <= 10);
  var bestBoard;
  //todo constants
  while(isSideEmpty && constraint){
    //move left, check heuristic
    var moveType;
    if(isLeft){
      moveType = "MOVE_LEFT";
    }
    else{
      moveType = "MOVE_RIGHT"
    }
    var test = PieceList({
      currentPiece: {
        _piece: currentPiece._piece,
        _position: move,
        _rotation: currentPiece._rotation
      },
      heldPiece: null,
      pieceQueue: null
    }, {
      type: moveType,
      board: board,
      move: move
    })
    var newY = getPreviewPosition(board, test.currentPiece._piece, test.currentPiece._rotation, test.currentPiece._position);
    var newMove = {x: test.currentPiece._position.x, y: newY}
    var newBoard = Board(board, {
      type: "ADD_PIECE",
      piece: test.currentPiece._piece,
      rotation: test.currentPiece._rotation,
      position: newMove
    });
    var heuristics = this.getHeuristic(newBoard);
    if(heuristics > highestHeuristic){
      highestHeuristic = heuristics;
      bestBoard = newBoard;
      bestPos = {
        x: newMove.x,//(moveType == "MOVE_RIGHT") ? newMove.x - 1 : newMove.x + 1,
        y: newMove.y
      };
    }
    move = isLeft ? {x: move.x - 1, y: move.y} : {x: move.x + 1, y: move.y};
    constraint = isLeft ? (move.x >= -1) : (move.x <= 10);

    isSideEmpty = isEmptyPosition(board, currentPiece._piece, currentPiece._rotation, move);
  }
  return {
    heuristic: highestHeuristic,
    pos: bestPos,
    bestBoard: bestBoard
  }
}

Solver.prototype.nonMoveHeuristics = function nonMoveHeuristics(board, currentPiece){
  var newY = getPreviewPosition(board, currentPiece._piece, currentPiece._rotation, currentPiece._position);
  var newMove = {x: currentPiece._position.x, y: newY}
  var newBoard = Board(board, {
    type: "ADD_PIECE",
    piece: currentPiece._piece,
    rotation: currentPiece._rotation,
    position: newMove
  });
  var heuristics = this.getHeuristic(newBoard);
  return {
    heuristic: heuristics,
    pos: newMove,
    bestBoard: newBoard
  }
}

Solver.prototype.getMoveList = function getMoveList(board, currentPiece) {
  //move left and check heuristics?
  var originalRotation = currentPiece._rotation;

  var left, right, center;
  var best = {
    heuristic: -9999
  }
  for(var i=0; i<4; i++){
    left = this.traverseSide(board, {
                                      ...currentPiece,
                                      _rotation: i
                                    }, true);
    right = this.traverseSide(board, {
                                      ...currentPiece,
                                      _rotation: i
                                    }, false);
    center = this.nonMoveHeuristics(board, {...currentPiece, _rotation: i});
    var largest = Math.max(left.heuristic, right.heuristic, center.heuristic);
    if(largest > best.heuristic){
      best.rotation = i;
      switch(largest){
        case left.heuristic:
          best.heuristics = left;
          best.heuristic = left.heuristic;
          break;
        case right.heuristic:
          best.heuristics = right;
          best.heuristic = right.heuristic;
          break;
        case center.heuristic:
          best.heuristics = center;
          best.heuristic = center.heuristic;
          break;
      }
    }
  }


  var moveList = [];
  //todo make more efficient, 3 lefts is a right
  if(best.rotation != currentPiece._rotation){
    while(best.rotation > currentPiece._rotation){
      moveList.push("ROTATE_CLOCKWISE");
      best.rotation--;
    }
    while(best.rotation < currentPiece._rotation){
      moveList.push("ROTATE_COUNTERCLOCKWISE");
      best.rotation++;
    }
  }
  if(best.heuristics.pos.x > currentPiece._position.x){
    while(best.heuristics.pos.x > currentPiece._position.x){
      moveList.push("MOVE_RIGHT");
      currentPiece._position.x++;
    }
  }
  else{
    while(best.heuristics.pos.x < currentPiece._position.x){
      moveList.push("MOVE_LEFT");
      currentPiece._position.x--;
    }
  }

  return {
    heuristic: best.heuristics,
    moveList: moveList
  }
  //move right and check heuristics?
}

Solver.prototype.getHeuristic = function getHeuristic(board){
  var boardInfo = this.getInfo(board);
  var heightConstant = -0.510066;
  var linesClearedConstant = 0.760666;
  var holesConstant = -0.35663;
  var bumpinessConstant = -0.184483;
  return (boardInfo.aggregateHeight*heightConstant +
          boardInfo.holes*holesConstant +
          boardInfo.bumpiness*bumpinessConstant +
          boardInfo.linesCleared*linesClearedConstant);
}

Solver.prototype.getInfo = function getInfo(board) {
  return {
    aggregateHeight: this.getAggregateHeight(board),
    holes: this.getHoles(board),
    bumpiness: this.getBumpiness(board),
    linesCleared: this.getLinesCleared(board)
  }
}

Solver.prototype.getAggregateHeight = function getAggregateHeight (board) {
//sum height of each row
  var height = 0;
  var boardHeight = board.length;
  for(var j=0; j<board[0].length; j++){
    for(var i=0; i<board.length; i++){
      if(board[i][j] != false){
        height += boardHeight-i;
        break;
      }
    }
  }
  return height;
}

Solver.prototype.getHoles = function getHoles (board) {
  //# pieces which have a piece above them
  var numHoles = 0;
  var boardHeight = board.length;
  for(var j=0; j<board[0].length; j++){
    var hasBlockAbove = false;
    for(var i=0; i<board.length; i++){
      if(board[i][j] == false && hasBlockAbove){
        numHoles++;
      }
      if(board[i][j] != false){
        hasBlockAbove = true;
      }
    }
  }
  return numHoles;
}

Solver.prototype.getBumpiness = function getBumpiness (board) {
//sum of differences in height
  var totalBumpiness = 0;
  var boardHeight = board.length;
  var prevHeight = 0;
  for(var j=0; j<board[0].length; j++){
    for(var i=0; i<board.length; i++){
      if(j == 0 && board[i][j] != false){
        prevHeight = boardHeight - i;
        break;
      }
      else if(i == board.length - 1 && board[i][j] == false){
        totalBumpiness += prevHeight;
        prevHeight = 0;
        break;
      }
      else if(board[i][j] != false){
        var height;
        height = (boardHeight - i);
        totalBumpiness += Math.abs((prevHeight) - height);
        prevHeight = boardHeight - i;
        break;
      }
    }
  }
  return totalBumpiness;
}

Solver.prototype.getLinesCleared = function getLinesCleared (board) {
  var state = _.cloneDeep(board);
  var length = state[state.length - 1].length;
  var numCleared = 0;
  for(var i=0; i<state.length; i++){
    for(var j=0; j<state[i].length; j++){
      if(state[i][j] == false){
        break;
      }
      if(j == (state[i].length - 1) && state[i][j] != null){
        numCleared++;
      }
    }
  }
  return numCleared;
}


module.exports = Solver;
