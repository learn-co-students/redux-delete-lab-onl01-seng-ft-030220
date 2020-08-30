import React from 'react';
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;

// import React, { Component } from 'react';

// class BandInput extends Component {

//   state = {
//     bandName: ''
//   }

//   handleOnChange(event) {
//     this.setState({
//       bandName: event.target.value,
//     });
//   }

//   handleOnSubmit(event) {
//     event.preventDefault();
//     this.props.addBand(this.state.bandName);
//     this.setState({
//       bandName: '',
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <input
//             type="text"
//             value={this.state.bandName}
//             onChange={(event) => this.handleOnChange(event)} />
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// };

// export default BandInput;
