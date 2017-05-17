/*
 {
 currentScore: n,
 highScore: n
}
 */
const init = () => {
  let highScore = parseInt(localStorage.getItem( 'react-tetris-highScore' )) || 0;
  return {
    currentScore: 0,
    highScore: highScore,
    linesCleared: 0
  }
}

const Score = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  switch(action.type){
    case 'NEW_GAME':
      return init();
    case 'SCORE_INCREMENT':
      return {
        ...state,
        currentScore: action.value,
        linesCleared: action.linesCleared
      }
    case 'HIGH_SCORE_INCREMENT':
      localStorage.setItem( 'react-tetris-highScore', action.value );
      return{
        currentScore: action.value,
        highScore: action.value,
        linesCleared: action.linesCleared
      }
    default:
      return state
  }
}

export default Score;
