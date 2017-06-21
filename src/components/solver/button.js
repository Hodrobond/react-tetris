import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {toggleSolving} from '../../actions/solver';

import './button.css'

class solverButton extends React.Component{
  componentDidMount() {

  }

  render() {
    return (
      <div className="solver-button">
        <div className="is-solving">{this.props.Solver.isSolving}</div>
        <button className="toggle-solver" onClick={this.props.toggleSolving}>Autoplay</button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    Solver: state.Solver
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({toggleSolving}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(solverButton)
