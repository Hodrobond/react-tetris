import {calculateScoreIncrement} from './score'


it('Score Increment - 1', () => {
  var emptyBoard = [[false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false]];

  const answer = calculateScoreIncrement(emptyBoard);
  const solution = {
    score: 0,
    linesCleared: 0
  };
  expect(answer).toEqual(solution);
})

it('Score Increment - 2', () => {
  var emptyBoard = [[false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"]];

  const answer = calculateScoreIncrement(emptyBoard);
  const solution = {
    score: 10,
    linesCleared: 1
  };
  expect(answer).toEqual(solution);
})

it('Score Increment - 3', () => {
  var emptyBoard = [[false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"]];

  const answer = calculateScoreIncrement(emptyBoard);
  const solution = {
    score: 20,
    linesCleared: 2
  };
  expect(answer).toEqual(solution);
})

it('Score Increment - 4', () => {
  var emptyBoard = [[false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"]];

  const answer = calculateScoreIncrement(emptyBoard);
  const solution = {
    score: 40,
    linesCleared: 3
  };
  expect(answer).toEqual(solution);
})

it('Score Increment -  5', () => {
  var emptyBoard = [[false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"]];

  const answer = calculateScoreIncrement(emptyBoard);
  const solution = {
    score: 80,
    linesCleared: 4
  };
  expect(answer).toEqual(solution);
})

it('Score Increment -  6', () => {
  var emptyBoard = [[false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  ["piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i","piece-i"]];

  const answer = calculateScoreIncrement(emptyBoard);
  const solution = {
    score: 20,
    linesCleared: 2
  };
  expect(answer).toEqual(solution);
})
