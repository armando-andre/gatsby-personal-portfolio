import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';

import "./navbar.css"

const activeStyle = {
  color: 'black'
}

export default () => (
  <Navbar expand="lg" className="navbarTopSpacing">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Link to="/about" className="navbarText" activeStyle={activeStyle}>About</Link>
      <Link to="/services" className="navbarText" activeStyle={activeStyle}>Services</Link>
      <Link to="/works" className="navbarText" activeStyle={activeStyle}>Works</Link>
      <Link to="/blog" className="navbarText" activeStyle={activeStyle}>Blog</Link>
      <Link to="/contact" className="navbarText" activeStyle={activeStyle}>Contact</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)