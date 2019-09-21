import React from "react";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(fab, farEnvelope)

const iconFont = {
  fontSize: '25px',
  marginRight: '17px',
  marginTop: '1%',
  marginBottom: '5%'
}

const IconsComponent = () => {
  return (
    <span>
      <a href="https://linkedin.com/in/armando-calderon-927677171" target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={iconFont} />
      </a>
      <a href="mailto: armandoandrecalderon@gmail.com?Subject=Contact%20for%20job" >
        <FontAwesomeIcon icon={['far', 'envelope']} style={iconFont} />
      </a>
      <a href="https://github.com/armando-andre" target="_blank">
        <FontAwesomeIcon icon={['fab', 'github-alt']} style={iconFont} />
      </a>
      <a href="https://www.instagram.com/armando__andre/" target="_blank" >
        <FontAwesomeIcon icon={['fab', 'instagram']} style={iconFont} />
      </a>
    </span>
  )
}

export default IconsComponent;
