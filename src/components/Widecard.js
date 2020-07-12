import React, { Component } from 'react';

class Widecard extends Component {
  render () {

    return (
      <div className="widecard">
        <div className="compdet">
          <h2>{this.props.title}</h2>
          <h3 className="secondtext">{this.props.where}</h3>
          <h3 className="secondtext">{this.props.from} - {this.props.to}</h3>
        </div>
      </div>
    )
  }
}

export default Widecard