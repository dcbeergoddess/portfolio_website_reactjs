import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {

  render () {

    return (

      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <h3> Email: <a href="mailto:rachel.michel.murray@gmail.com">rachel.michel.murray@gmail.com</a></h3>

        <Social />

      </div>

    )
  }
}

export default Contact