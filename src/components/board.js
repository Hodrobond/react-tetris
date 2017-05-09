import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { newGame } from '../actions/tetris'
import Row from "./row";

class Board extends React.Component{
  componentDidMount() {
    this.props.newGame();
  }
  render() {
    return (
      <div className="board">
        {this.props.Board.map((x, i) =>
          <Row value={x} key={i}/>
        )}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    Board: state.Board
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({newGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
