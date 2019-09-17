import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import logo from "../images/logo-dark-no-space.svg"

const activeStyle = {
  color: 'black'
}

const Header = () => {
  return (
    <Navbar expand="lg" className="navbarTopSpacing">
    <AniLink paintDrip hex="#000000" to="/" >
      <Navbar.Brand>
        <div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="colorlib-navbar-brand">
                <img className="header-logo" src={logo} />
							</div>
						</div>
					</div>
				</div>
      </Navbar.Brand>
    </AniLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <AniLink paintDrip hex="#000000" to="/about" className="navbarText" activeStyle={activeStyle}>About</AniLink>
          <AniLink paintDrip hex="#000000" to="/services" className="navbarText" activeStyle={activeStyle}>Services</AniLink>
          <AniLink paintDrip hex="#000000" to="/works" className="navbarText" activeStyle={activeStyle}>Works</AniLink>
          <AniLink paintDrip hex="#000000" to="/blog" className="navbarText" activeStyle={activeStyle}>Blog</AniLink>
          <AniLink paintDrip hex="#000000" to="/contact" className="navbarText" activeStyle={activeStyle}>Contact</AniLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;