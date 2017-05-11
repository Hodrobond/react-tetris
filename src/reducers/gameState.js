function init(){
  return {
    paused: false,
    gameOver: false
  }
}

function pauseGame(state){
  return {
    ...state,
    paused: true
  }
}

function unpauseGame(state){
  return {
    ...state,
    paused: false
  }
}

function endGame(state){
  return {
    ...state,
    gameOver: true
  }
}

const GameStateReducer = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  switch(action.type){
    case 'NEW_GAME':
      return init();
    case 'PAUSE_GAME':
      return pauseGame(state);
    case 'UNPAUSE_GAME':
      return unpauseGame(state);
    case 'END_GAME':
      return endGame(state);
    default:
      return state;
  }
}

export default GameStateReducer;
