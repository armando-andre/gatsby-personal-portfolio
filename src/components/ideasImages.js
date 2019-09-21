import React from 'react'
import Fade from 'react-reveal/Fade';

export default ({ children }) => (
  <Fade delay={500}>
    <div className="col-md-12">
      <div className="work-entry animate-box">
        { children }
      </div>
    </div>
  </Fade>
)