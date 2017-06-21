var React = require('react');
import Board from "./board/board";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import PausedOverlay from './pausedOverlay/pausedOverlay';
import PieceQueue from './pieceQueue/pieceQueue';
import ScoreBoard from './score/scoreBoard';
import GameOverOverlay from './gameOver/overlay';
import HeldPiece from './heldPiece/heldPiece';
import SolverButton from './solver/button';

import './tetris.css'

class Tetris extends React.Component{
  componentDidMount() {

  }

  render() {
    return (
      <div className="tetris">
        <ScoreBoard />
        <SolverButton />
        <GameOverOverlay />
        <PausedOverlay />
        <div className="info">
          <PieceQueue />
          <HeldPiece />
        </div>
        <Board />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tetris)
