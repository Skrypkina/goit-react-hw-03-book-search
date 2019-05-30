// import React from 'react';

// const style = {
//   backgroundColor: 'grey',
//   height: '100hv',
//   fontSize: '20px',
// };

// const Loader = () => <div style={style}>Loading.......</div>;

// export default Loader;

import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
    return (
      <div>
        <Spinner size={150} spinnerColor="#333" spinnerWidth={3} visible />
      </div>
    );
  }
}
