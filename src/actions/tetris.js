import {play} from './gameState';

export const newGame = () => {
  return(dispatch, getState) => {
    dispatch({type:'NEW_GAME'});
    play()(dispatch, getState);
  }
}
