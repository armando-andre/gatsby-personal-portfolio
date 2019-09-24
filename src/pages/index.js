import React from "react";
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import rotatedText from "../images/rotatedText.png"

const IndexPage = () => {
  return (
    <div className="index-main-container">
      <Helmet title="Armando André" defer={false} />
      <Fade delay={2000}>
        <div className="vertical-line-wrapper">
          <div className="vertical-line"></div>
        </div>
        <div className="circle-wrapper">
          <div className="progress-index">
            <div className="progress-left">
              <div className="progress-bar"></div>
            </div>
            <div className="progress-right">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
        <div className="index-text-container">
          <h1 className="right-align">ARMANDO</h1>
          <hr align="left" style={{width: "100%"}} />
          <h1 className="left-align">ANDRÉ</h1>
          <AniLink paintDrip hex="#000000" to="/about" className="rotating-text-wrapper">
            <img className="rotate-text" src={rotatedText} alt="Click Here To Enter"/>
          </AniLink>
        </div>
      </Fade>
    </div>
  )
}

export const aboutImageComponent = graphql`
	fragment aboutImageComponent on File {
		childImageSharp {
			fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
			}
		}
	}
`

export const aboutPageQuery = graphql`
	query {
		rotatedText: file(relativePath: {eq: "rotatedText.png"}) {
			...aboutImageComponent
    }
	}
`

export default IndexPage;