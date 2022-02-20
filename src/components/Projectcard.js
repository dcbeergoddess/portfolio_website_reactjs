import React, { Component } from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class Projectcard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem', display: 'flex' }}>
          <Card.Img
            className='img-style'
            variant='top'
            alt={this.props.title}
            src={this.props.image}
          />
          <Card.Body>
            <Card.Title className='title'>{this.props.title}</Card.Title>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem style={{ background: 'ivory' }}>
              <strong>Description:</strong> {this.props.description}
            </ListGroupItem>
            <ListGroupItem style={{ background: 'ivory' }}>
              <strong>Tech Stack:</strong> {this.props.techstack}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button
              variant='outline-dark'
              href={this.props.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Repo
            </Button>
            <Button
              variant='outline-dark'
              href={this.props.deploy}
              target='_blank'
              rel='noopener noreferrer'
            >
              Deployed Project
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Projectcard;
