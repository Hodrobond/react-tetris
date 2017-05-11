import Board from './board'

var PieceTypes = require('../modules/pieces');

it('Initialize', () => {
  const initialized = Board(0);
  let solution = new Array(20);
  for(var i = 0; i < 20; i++){
    solution[i] = new Array(10);
    for(var j = 0; j < 10; j++){
      solution[i][j] = false;
    }
  }
  expect(initialized).toEqual(solution);
})

it('Clear rows - 1 bottom', () => {
  let state = new Array(20);
  let solution = new Array(20);
  for(var i = 0; i < 20; i++){
    state[i] = new Array(10);
    solution[i] = new Array(10);
    for(var j = 0; j < 10; j++){
      if(i > 18)
        state[i][j] = true;
      else
        state[i][j] = false;

      solution[i][j] = false;
    }
  }
  let newBoard = Board(state, {type: "CLEAR_ROWS"});
  expect(newBoard).toEqual(solution);
})

it('Clear rows - none', () => {
  let state = new Array(20);
  let solution = new Array(20);
  for(var i = 0; i < 20; i++){
    state[i] = new Array(10);
    solution[i] = new Array(10);
    for(var j = 0; j < 10; j++){
      state[i][j] = false;
      solution[i][j] = false;
    }
  }
  let newBoard = Board(state, {type: "CLEAR_ROWS"});
  expect(newBoard).toEqual(solution);
})

it('Clear rows - 4 bottom', () => {
  let state = new Array(20);
  let solution = new Array(20);
  for(var i = 0; i < 20; i++){
    state[i] = new Array(10);
    solution[i] = new Array(10);
    for(var j = 0; j < 10; j++){
      if(i > 15)
        state[i][j] = true;
      else
        state[i][j] = false;

      solution[i][j] = false;
    }
  }
  let newBoard = Board(state, {type: "CLEAR_ROWS"});
  expect(newBoard).toEqual(solution);
})

it('Clear rows - 1 non-edge', () => {
  let state = new Array(20);
  let solution = new Array(20);
  for(var i = 0; i < 20; i++){
    state[i] = new Array(10);
    solution[i] = new Array(10);
    for(var j = 0; j < 10; j++){
      if(i == 18)
        state[i][j] = true;
      else
        state[i][j] = false;

      solution[i][j] = false;
    }
  }
  let newBoard = Board(state, {type: "CLEAR_ROWS"});
  expect(newBoard).toEqual(solution);
})

it('Add piece', () => {
  let state = new Array(20);
  let solution = new Array(20);
  for(var i = 0; i < 20; i++){
    state[i] = new Array(10);
    solution[i] = new Array(10);
    for(var j = 0; j < 10; j++){
      state[i][j] = false;
      solution[i][j] = false;
    }
  }
  const testPiece = {
    _piece: PieceTypes.I,
    _rotation: 0,
    _position: {
      x: 4,
      y: 15
    }
  }

  solution[15][5] = "piece-i";
  solution[16][5] = "piece-i";
  solution[17][5] = "piece-i";
  solution[18][5] = "piece-i";

  let newBoard = Board(state, {type: "ADD_PIECE", piece: testPiece._piece, rotation: testPiece._rotation, position: testPiece._position});
  expect(newBoard).toEqual(solution);

})
