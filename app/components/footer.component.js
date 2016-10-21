'use strict'

import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="footer">
        <p>fishyfishy&nbsp; <img src="./public/image/geddes.png" className="logo"/>
        &nbsp; &nbsp; & &nbsp; &nbsp;<img src="./public/image/soundcloud.png" className="soundcloud"/></p>
      </div>
    )
  }

}

export default Footer
