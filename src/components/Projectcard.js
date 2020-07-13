import React,  { Component } from 'react';

class Projectcard extends Component {

  render () {

    return (

      <div className="card">

        <div className="img-container">
          <img alt={this.props.title} src={this.props.image} />
        </div>

        <div className="content">
          <ul>
            <li>
              <strong>{this.props.title}</strong>
            </li>
            <li>
              <strong>Description:</strong> {this.props.description}
            </li>
            <li>
              <strong>Tech Stack:</strong> {this.props.techstack}
            </li>
          </ul>

          <a href={this.props.github} type="button" target="_blank" rel="noopener noreferrer" className="btn btn-default">Github Repo</a>

          <a href={this.props.deploy} type="button" target="_blank" rel="noopener noreferrer" className="btn btn-default">Deployed Project</a>

        </div>

      </div>
    )
  }
}

export default Projectcard