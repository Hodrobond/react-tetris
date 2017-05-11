import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

import './piece.css'

class piece extends React.Component{
  componentDidMount() {

  }

  render() {
    return (
      <div className="piece">
        {this.props.blocks.map((x, i) =>
          <div className="row">
            {x.map((y, i) =>
              <div className={"tile tile-"+y}>

              </div>
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(piece)
