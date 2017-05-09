var PieceQueue = require('../modules/piece-queue');

const PieceList = (state = 0, action) => {
  if(state === 0){
    return new PieceQueue(4);
  }
  switch(action.type){
    case 'NEW_GAME':
      return new PieceQueue(4);
    default:
      return state
  }
}

export default PieceList;
