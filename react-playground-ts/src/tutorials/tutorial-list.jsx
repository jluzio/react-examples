/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Game from './tic-tac-toe/game'
import CounterExamples from './state/counter-examples'
import './tutorial.css'

export default class TutorialList extends React.Component {
  render() {
    return (
      <div className="tutorial-list">
        <h2>Tutorials</h2>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div id="accordion">
          <div className="card tutorial-item">
            <div className="card-header" id="headingTicTacToe">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseTicTacToe"
                  aria-expanded="true"
                  aria-controls="collapseTicTacToe"
                >
                  Tic-Tac-Toe
                </button>
              </h5>
            </div>
            <div
              id="collapseTicTacToe"
              className="collapse show"
              aria-labelledby="headingTicTacToe"
              data-parent="#accordion"
            >
              <div className="card-body">
                <Game />
              </div>
            </div>
          </div>
          <div className="card tutorial-item">
            <div className="card-header" id="headingState">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseState"
                  aria-expanded="false"
                  aria-controls="collapseState"
                >
                  Counter State
                </button>
              </h5>
            </div>
            <div
              id="collapseState"
              className="collapse"
              aria-labelledby="headingState"
              data-parent="#accordion"
            >
              <div className="card-body">
                <CounterExamples />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
