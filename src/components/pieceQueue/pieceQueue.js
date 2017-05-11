import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import Piece from './piece';
import './pieceQueue.css';

class pieceQueue extends React.Component{
  componentDidMount() {

  }

  render() {
    return (
      <div className="piece-queue-wrapper">
        {this.props.PieceList.pieceQueue.queue.map((x, i) =>
          <div className={"piece-queue piece-queue-"+x.className}>
            <Piece blocks={x.blocks[0]}/>
          </div>
        )}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    PieceList: state.PieceList
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(pieceQueue)
