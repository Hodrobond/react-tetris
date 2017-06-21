import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { newGame } from '../../actions/tetris';

import './overlay.css';

class gameOverOverlay extends React.Component{
  componentDidMount() {

  }

  render() {
    if(this.props.GameState.gameOver){
      return (
        <div className="game-over-overlay">
          <div className="wrapper">
            <p className="game-over-message">I'm sorry, you've lost</p>
            <button className="new-game" onClick={this.props.newGame}>New Game</button>
          </div>
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
  return bindActionCreators({newGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(gameOverOverlay)
