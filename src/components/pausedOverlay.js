import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { pause } from '../actions/board'

import './pausedOverlay.css'

class pausedOverlay extends React.Component{
  componentDidMount() {

  }

  render() {
    if(this.props.GameState.paused){
      return (
        <div className="paused-overlay">
          <p className="paused-message">The game is paused!</p>
          <button className="resume" onClick={this.props.pause}>Resume</button>
        </div>
      )
    }
    else{
      return (<div></div>)
    }
  }
};

const mapStateToProps = (state) => {
  return {
    GameState: state.GameState
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({pause}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(pausedOverlay)
