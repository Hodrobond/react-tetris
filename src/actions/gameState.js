import {handleMove} from './pieceList';

export const play = () => {
  return(dispatch, getState) => {
    setTimeout(function(){
      var paused = getState().GameState.paused;
      if(!paused){
        handleMove({type:'MOVE_DOWN'})(dispatch, getState);
      }
      var gameOver = getState().GameState.gameOver;
      if(!gameOver){
        play()(dispatch, getState);
      }
    }, 600)
  }
}

export const pause = () => {
  return(dispatch, getState) => {
    var paused = getState().GameState.paused;
    if(!paused){
      dispatch({type: 'PAUSE_GAME'});
    }
    else{
      dispatch({type: 'UNPAUSE_GAME'});
    }
  }
}
