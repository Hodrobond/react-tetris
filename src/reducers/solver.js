/*
 {
 currentScore: n,
 highScore: n
}
 */
const init = () => {
  return {
    isSolving: false
  }
}

const toggleSolving = (state) => {
  return {
    ...state,
    isSolving: !state.isSolving
  }
}

const Solver = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  switch(action.type){
    case 'NEW_GAME':
      return init();
    case 'TOGGLE_SOLVING':
      return toggleSolving(state);
    default:
      return state;
  }
}

export default Solver;
