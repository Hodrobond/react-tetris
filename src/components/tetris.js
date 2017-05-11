var React = require('react');
import Board from "./board/board";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import PausedOverlay from './pausedOverlay/pausedOverlay';
import PieceQueue from './pieceQueue/pieceQueue';

class Tetris extends React.Component{
  componentDidMount() {

  }

  render() {
    return (
      <div className="tetris">
        <PausedOverlay />
        <Board />
        <PieceQueue />
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
