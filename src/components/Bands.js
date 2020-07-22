import React, { Component } from 'react'
import Band from './Band'
import { connect } from 'react-redux'

class Bands extends Component {
  render() {
    return (
      <div>
        {this.props.bands.map(band => {
          return (< Band key={band.id} band={band} delete={this.props.delete}/>)
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: band => dispatch({type: "DELETE_BAND", id: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bands)
