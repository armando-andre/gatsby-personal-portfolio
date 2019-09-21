import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Fade from 'react-reveal/Fade';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import FontAwesomeIcon from "../components/aboutIcons"

const imageWidth = {
  width: '180px'
}

const margin = {
  marginBottom: '1.5rem'
}

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      fullLogo: file(relativePath: { eq: "logo-full-dark-no-space.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <footer>
      <div id="footer" className="bottom-padding-remover">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-pb-sm">
              <div className="row">
                <div className="col-md-10">
                  <h2>Let's Talk</h2>
                    <p className="margin-right">Do you want to reach me? Click on any of the provided ways.</p>
                  <div className="colorlib-social-icons icons-wrapper-spacing">
                    <ul className="contact-info">
                      <FontAwesomeIcon />
                    </ul>
                  </div>
                  <Img fluid={data.fullLogo.childImageSharp.fluid} style={imageWidth} />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-pb-sm">
              <h2>Latest Blog</h2>
              <div className="f-entry">
                <div className="desc">
                  <span>2 September 2015</span>
                  <h3><AniLink paintDrip hex="#000000" to="/blog">Road Trip on Norway</AniLink></h3>
                </div>
              </div>
              <div className="f-entry">
                <div className="desc">
                  <span>2 September 2015</span>
                  <h3><AniLink paintDrip hex="#000000" to="/blog">Stop Overthinking</AniLink></h3>
                </div>
              </div>
              <div className="f-entry">
                <div className="desc">
                  <span>2 September 2015</span>
                  <h3><AniLink paintDrip hex="#000000" to="/blog">Life as an Arcade</AniLink></h3>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <h2>Go Back To</h2>
              <div className="f-entry-refactored">
                <div className="desc">
                  <h3 style={margin}><AniLink paintDrip hex="#000000" className="footer-font-increaser" to="/about">About</AniLink></h3>
                </div>
              </div>
              <div className="f-entry-refactored">
                <div className="desc">
                  <h3 style={margin}><AniLink paintDrip hex="#000000" className="footer-font-increaser" to="/services">Services</AniLink></h3>
                </div>
              </div>
              <div className="f-entry-refactored">
                <div className="desc">
                  <h3 style={margin}><AniLink paintDrip hex="#000000" className="footer-font-increaser" to="/works">Works</AniLink></h3>
                </div>
              </div>
              <div className="f-entry-refactored">
                <div className="desc">
                  <h3 style={margin}><AniLink paintDrip hex="#000000" className="footer-font-increaser" to="/blog">Blog</AniLink></h3>
                </div>
              </div>
              <div className="f-entry-refactored">
                <div className="desc">
                  <h3 style={margin}><AniLink paintDrip hex="#000000" className="footer-font-increaser" to="/contact">Contact</AniLink></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright © 2019 All rights reserved | This website was made by Armando André.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;