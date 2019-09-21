import React from 'react'
import Fade from 'react-reveal/Fade';

const textAlign = {
	width: '100%',
	margin: '0 auto'
}

export default (props) => (  
  <Fade delay={300}>
    <div className="col-md-12">
      <div className="work-entry animate-box">
        <a href={props.href} target="_blank">
          { props.image }
        </a>
        <div className="col-md-4 col-md-offset-4" style={textAlign}>
          <h1>{props.title}</h1>
          <div className="desc">
            <p>{props.paragraph}</p>
            <p className="read">
              <a href={props.href} target="_blank">View Details</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fade>
)