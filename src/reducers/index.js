/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import {combineReducers} from 'redux';
import Board from './board';
import PieceList from './pieceList';
import GameState from './gameState';
import Score from './score';
import Solver from './solver';

export default combineReducers({
    Board,
    PieceList,
    GameState,
    Score,
    Solver
})
