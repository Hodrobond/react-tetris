var _ = require('lodash');

export const calculateScoreIncrement = (board) => {
  var state = _.cloneDeep(board);
  var length = state[state.length - 1].length;
  var numCleared = 0;
  for(var i = 0; i < state.length; i++){
    for(var j = 0; j < state[i].length; j++){
      if(state[i][j] === false){
        break;
      }
      if(j === state[i].length - 1){
        state.splice(i, 1);
        state.unshift(new Array(state[0].length));
        for(var j = 0; j < state[0].length; j++){
          state[0][j] = false;
        }
        numCleared++;
      }
    }
  }
  var score = numCleared > 0 ? Math.pow(2, numCleared - 1) * length : 0;
  return {
    score,
    numCleared
  };
}
