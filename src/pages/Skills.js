import React, { Component } from 'react';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state={
      'myskills': ['React', 'JavaScript', 'jQuery', 'MERN Stack', 'HTML', 'CSS', 'Bootstrap', 'Node', 'Express', 'ES6+', 'JSX', 'SQL', 'Sequelize', 'MongoDB', 'Mongoose', 'Github', "APIs", 'Final Cut Pro X', 'Adobe Creative Suite', 'Trello' ]
    }
  }
  
  render () {

    return (

      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
          <ul>
            {this.state.myskills.map((value) => {
              return <li><p>{value}</p></li>
            })}
          </ul>
      </div>

    )
  }
}

export default Skills