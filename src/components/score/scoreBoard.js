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
        <div className="current-score">{this.props.Score.currentScore}</div>
        <div className="high-score">{this.props.Score.highScore}</div>
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
