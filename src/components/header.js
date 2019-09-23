import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Fade from 'react-reveal/Fade';
import { Navbar, Nav } from 'react-bootstrap'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const activeStyle = {
  color: 'black'
}

const marginHeaderMobile = {
  marginBottom: '20px'
}

const marginHeaderMobileLastChild = {
  marginBottom: '50px'
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Fade>
    <Navbar expand="lg" className="navbarTopSpacing">
    <AniLink paintDrip hex="#000000" to="/" >
      <Navbar.Brand>
        <div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="colorlib-navbar-brand">
                <Img className="header-logo" fluid={data.logo.childImageSharp.fluid} />
							</div>
						</div>
					</div>
				</div>
      </Navbar.Brand>
    </AniLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <AniLink paintDrip hex="#000000" to="/about" className="navbarText" style={marginHeaderMobile} activeStyle={activeStyle}>About</AniLink>
          <AniLink paintDrip hex="#000000" to="/services" className="navbarText" style={marginHeaderMobile} activeStyle={activeStyle}>Services</AniLink>
          <AniLink paintDrip hex="#000000" to="/works" className="navbarText" style={marginHeaderMobile} activeStyle={activeStyle}>Works</AniLink>
          <AniLink paintDrip hex="#000000" to="/ideas" className="navbarText" style={marginHeaderMobile} activeStyle={activeStyle}>Ideas</AniLink>
          <AniLink paintDrip hex="#000000" to="/blog" className="navbarText" style={marginHeaderMobile} activeStyle={activeStyle}>Blog</AniLink>
          <AniLink paintDrip hex="#000000" to="/contact" className="navbarText" style={marginHeaderMobileLastChild} activeStyle={activeStyle}>Contact</AniLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Fade>
  )
}

export default Header;