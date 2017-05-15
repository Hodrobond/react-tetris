import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Piece from '../pieceQueue/piece';

import './heldPiece.css'

class heldPiece extends React.Component{
  componentDidMount() {

  }

  render() {
    if(this.props.PieceList.heldPiece == null){
        return (
             <div className="held-piece">
              <div className="title">Held Piece</div>
              <div className={"piece-queue piece-queue-empty"}>
                <Piece blocks={[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}/>
              </div>
            </div>
          )
    }
    else{
      return (
        <div className="held-piece">
          <div className="title">Held Piece</div>
          <div className={"piece-queue piece-queue-"+this.props.PieceList.heldPiece.className}>
            <Piece blocks={this.props.PieceList.heldPiece.blocks[0]}/>
          </div>
        </div>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(heldPiece)
