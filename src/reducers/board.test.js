import Board from './board'

it('Initialize', () => {
  const initialized = Board(0, {type:'NEW_GAME'});
  let solution = new Array(20);
  for(var i = 0; i < 20; i++){
    solution[i] = new Array(10);
    for(var j = 0; j < 10; j++){
      solution[i][j] = false;
    }
  }
  expect(initialized).toEqual(solution);
})

it('Clear rows - 1', () => {
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

it('Clear rows - 4', () => {
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
