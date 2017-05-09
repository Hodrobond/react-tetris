/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import {combineReducers} from 'redux'
import Board from './board'
import PieceList from './pieceList'

export default combineReducers({
    Board,
    PieceList
})
