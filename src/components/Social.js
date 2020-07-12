import React, { Component } from 'react';

class Social extends Component {
  
  render () {
    
    return (

      <div className="social">

        {/* github */}

        <a href="https://github.com/dcbeergoddess" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>

        {/* linkedIn */}

        <a href="https://www.linkedin.com/in/rachel-murray-044427191/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>

        {/* facebook */}

        <a href="https://www.facebook.com/rachel.m.murray.5" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>

        {/* instagram */}

        <a href="https://www.instagram.com/dcbeergoddess/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>

        {/* twitter */}

        <a href="https://twitter.com/dcbeergoddess/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>

      </div>
    )
  }
}

export default Social