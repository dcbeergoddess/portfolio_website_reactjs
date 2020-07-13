import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {

  render () {

    return (

      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <h3 className="contact"> Email: <a href="mailto:rachel.michel.murray@gmail.com?subject=Portfolio Contact for Rachel Murray">rachel.michel.murray@gmail.com</a></h3>
      <div className="contactSocial">
        <Social />
        </div>  
      </div>

    )
  }
}

export default Contact