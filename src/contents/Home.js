import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/rachelcrop.jpg';
import Social from '../components/Social';

class Home extends Component {

  render() {

    return (
      <div className="condiv home">

        <img src={profilepic} className="profilepic" alt="rachel"></img>

        <ReactTypingEffect className="typingeffect" text={[ 'I am Rachel Michel Murray', 'I am a Web Developer']} speed={100} eraseDelay={700} style={{color: "#2C2A29"}} />

        <Social />
      </div>
    )
  }
}

export default Home