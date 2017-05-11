function init(){
  return {
    paused: false
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

const GameStateReducer = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  switch(action.type){
    case 'PAUSE_GAME':
      return pauseGame(state);
    case 'UNPAUSE_GAME':
      return unpauseGame(state);
    default:
      return state;
  }
}

export default GameStateReducer;
