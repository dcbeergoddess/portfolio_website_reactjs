import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/rachelcrop.jpg';
import Social from '../components/Social';

class Home extends Component {

  render() {

    return (
      <div className="condiv home">

        <h1 className="name">Rachel Michel Murray</h1>

        <img src={profilepic} className="profilepic" alt="rachel"></img>

        <ReactTypingEffect className="typingeffect" text={[ 'Cheers!', 'i am a Web Developer', '...dedicated to collaboration', 'and skilled in the art of leadership']} speed={75} eraseDelay={700} style={{color: "#2C2A29"}} />

        <Social />
        
      </div>
    )
  }
}

export default Home