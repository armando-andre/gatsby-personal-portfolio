import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Fade from 'react-reveal/Fade';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import FontAwesomeIcon from "../components/aboutIcons";

const topAlign = {
  height: '25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const imageWidth = {
  width: '180px'
}

const copyrightMargin = {
  marginTop: '2rem'
}

const MyFunction = () => {
  window.scrollTo(0, 0);
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
      <Fade>
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
                    <h3><AniLink paintDrip hex="#000000" to="/blog">Example Title</AniLink></h3>
                  </div>
                </div>
                <div className="f-entry">
                  <div className="desc">
                    <span>2 September 2015</span>
                    <h3><AniLink paintDrip hex="#000000" to="/blog">Example Title</AniLink></h3>
                  </div>
                </div>
                <div className="f-entry">
                  <div className="desc">
                    <span>2 September 2015</span>
                    <h3><AniLink paintDrip hex="#000000" to="/blog">Example Title</AniLink></h3>
                  </div>
                </div>
              </div>
              <div className="col-md-2" style={topAlign}>
                <h2 onClick={MyFunction} id="topButton">Top</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center" style={copyrightMargin}>
                <p>Copyright © 2019 All rights reserved | This website was made by Armando André.</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  )
}

export default Footer;