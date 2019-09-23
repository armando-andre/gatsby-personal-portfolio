import React from "react";
import Fade from 'react-reveal/Fade';

export default () => (
  <div className="index-main-container">
    {/* <Fade delay={5000}> */}
      {/* <hr align="left" width="50%" /> */}
      <div className="col-md-3 col-sm-6 text-center">
        <div className="progress blue">
          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>
        </div>
      </div>
    {/* </Fade> */}
  </div>
)