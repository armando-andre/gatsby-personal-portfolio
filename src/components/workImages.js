import React from 'react'
import Fade from 'react-reveal/Fade';

export default ({ children }) => (
  <div className="row">
    <div className="col-md-12">
      <Fade delay={300}>
        <div className="work-entry animate-box">
          { children }
        </div>
      </Fade>
    </div>
  </div>
)