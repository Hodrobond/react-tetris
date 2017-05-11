import GameState from './gameState';

it('iniialization should return unpaused', () => {
  const initialized = GameState(0);
  const solution = {
    paused: false
  }
  expect(initialized).toEqual(solution);
})

it('Pause', () => {
  const initial = {
    paused: false
  }
  let newState = GameState(initial, {type: "PAUSE_GAME"});
  const solution = {
    paused: true
  }
  expect(newState).toEqual(solution);
})

it('Unpause', () => {
  const initial = {
    paused: true
  }
  let newState = GameState(initial, {type: "UNPAUSE_GAME"});
  const solution = {
    paused: false
  }
  expect(newState).toEqual(solution);

})
