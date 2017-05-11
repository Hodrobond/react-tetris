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
