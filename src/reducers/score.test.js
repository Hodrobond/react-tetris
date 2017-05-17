import Score from './score';
var locStorage = require('../utility/mockLocalStorage')

it('Inititalization', () => {
  const initialized = Score(0);
  const solution = {
    currentScore: 0,
    highScore: 0
  }
  expect(initialized).toEqual(solution);
})

it('Score Increment - 1', () => {
  const initialized = Score(0);
  let newState = Score(initialized, {type: "SCORE_INCREMENT", value: 10});
  const solution = {
    currentScore: 10,
    highScore: 0
  }
  expect(newState).toEqual(solution);
})

it('High Score Increment - 1', () => {
  const initialized = Score(0);
  let newState = Score(initialized, {type: "HIGH_SCORE_INCREMENT", value: 10});
  const solution = {
    currentScore: 10,
    highScore: 10
  }
  expect(newState).toEqual(solution);
})

it('Get High Score - 1', () => {
  localStorage.setItem("react-tetris-highScore", 150);
  const initialized = Score(0);
  const solution = {
    currentScore: 0,
    highScore: 150
  }
  expect(initialized).toEqual(solution);
})
