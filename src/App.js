import React, { Component } from 'react';
import logo from './logo.svg';
import Tetris from "./components/tetris";

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tetris />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
