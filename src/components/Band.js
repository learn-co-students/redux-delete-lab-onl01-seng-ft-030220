import React, { Component } from 'react';

class Band extends Component {

  render() {
    const { removeBand, band: { name, id} } = this.props
    return(
      <li>
        <span>{name}</span>
        <button onClick={() => removeBand(id)}>Delete</button>
      </li>
    );
  }
};

export default Band;
