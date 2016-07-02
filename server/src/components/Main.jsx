require('normalize.css/normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.min.css');

import React from 'react';
import $ from 'jquery';
import {Button, Grid, Col, Row, MenuItem, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';

class NomatNav extends React.Component {
  defaultProps = {};

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Nomat Controller</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='#'>Controller</NavItem>
            <NavItem eventKey={2} href='#'>Config</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class NomatController extends React.Component {
  nomatOn() {
    console.log('On!');
    $.ajax({
      url: './api/on'
    })
  }

  nomatOff() {
    console.log('Off!');
    $.ajax({
      url: './api/off'
    })
  }

  render() { return (
    <div>
      <NomatNav />
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Button bsSize='large' bsStyle='success' block onClick={this.nomatOn}>ON</Button>
          </Col>
          <Col xs={12} md={6}>
            <Button bsSize='large' bsStyle='danger' block onClick={this.nomatOff}>OFF</Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );}
}

export default NomatController;
