import React from 'react'
import Fade from 'react-reveal/Fade';
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ children }) => (
  <Fade delay={300}>
    <div className="article animate-box">
      <AniLink paintDrip hex="000000" to="/blog" className="blog-img">
        { children }
        <div className="overlay"></div>
        <div className="link">
          <span className="read">Read more</span>
        </div>
      </AniLink>
      <div className="desc">
        <span className="meta">15, Feb 2018</span>
        <h2><AniLink paintDrip hex="#000000" to="/blog">Example Title</AniLink></h2>
        <p>When he reached the first hills, he had a last view back on the skyline of her hometown, and said: "I Love Them All".</p>
      </div>
    </div>
  </Fade>
)