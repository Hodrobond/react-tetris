import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

import './scoreBoard.css'

class piece extends React.Component{
  componentDidMount() {

  }

  render() {
    return (
      <div className="scoreBoard">
        <div className="current-score"><span className="text">Current Score </span><span className="value">{this.props.Score.currentScore}</span></div>
        <div className="high-score"><span className="text">High Score </span><span className="value">{this.props.Score.highScore}</span></div>
        <div className="lines-cleared"><span className="text">Lines Cleared </span><span className="value">{this.props.Score.linesCleared}</span></div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    Score: state.Score
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(piece)
