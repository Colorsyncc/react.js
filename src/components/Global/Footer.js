// Dependencies
import React, { Component } from 'react';

// Assets
import './css/Footer.css';

class Footer extends Component {

  render() {
    const {copyright ="&copy; Colorsync - 2017"} = this.props;

    return (
      <div className="Footer">
          <p> {copyright} </p>
      </div>
    );
  }
}

export default Footer;
