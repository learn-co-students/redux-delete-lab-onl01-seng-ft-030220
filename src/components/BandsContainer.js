import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux'


class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand}/>
      </div>
    )
  }
}