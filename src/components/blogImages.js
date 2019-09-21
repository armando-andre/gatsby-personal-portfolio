import React from 'react'
import Fade from 'react-reveal/Fade';

export default ({ children }) => (
  <Fade delay={300}>
    <div className="article animate-box">
      <a href="blog.html" className="blog-img">
        { children }
        <div className="overlay"></div>
        <div className="link">
          <span className="read">Read more</span>
        </div>
      </a>
      <div className="desc">
        <span className="meta">15, Feb 2018</span>
        <h2><a href="blog.html">Example Title</a></h2>
        <p>When he reached the first hills, he had a last view back on the skyline of her hometown, and said: "I Love Them All".</p>
      </div>
    </div>
  </Fade>
)