import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {

  render() {

    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>

        <Widecard title="Professional Certificate: Full Stack Web Development" where="George Washington University | Washington, DC" from="March 2020" to="July 2020" />

        <Widecard title="Bachelor of Science in Foreign Service" where="Georgetown University | Washington, DC" from="August 2003" to="May 2007" />

      </div>
    )
  }
}

export default Education