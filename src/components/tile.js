/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React from 'react'

class Tile extends React.Component{
  render(){
    return(
      <div className={"tile tile-"+this.props.number}></div>
    )
  }
}

export default Tile
