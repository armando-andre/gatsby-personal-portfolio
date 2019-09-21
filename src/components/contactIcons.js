import React from "react";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMap as farMap } from '@fortawesome/free-regular-svg-icons'

library.add(fab, farEnvelope, farMap)

const iconFont = {
  fontSize: '25px',
  marginRight: '17px',
  marginTop: '1%',
}

const IconsComponent = () => {
  return (
    <ul className="contact-info">
      <li>
        <a href="mailto: armandoandrecalderon@gmail.com?Subject=Contact%20for%20job" >
          <FontAwesomeIcon icon={['far', 'envelope']} style={iconFont} /> Email
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/armando-calderon-927677171" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={iconFont} /> Linked In
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/armando__andre/" target="_blank" >
          <FontAwesomeIcon icon={['fab', 'instagram']} style={iconFont} /> Instagram
        </a>
      </li>
      <li>
        <a href="https://github.com/armando-andre" target="_blank">
          <FontAwesomeIcon icon={['fab', 'github-alt']} style={iconFont} /> Github
        </a>
      </li>
      <li>
        <a href="https://www.google.com/maps/place/UNIQORNS/@18.450566,-66.070403,16z/data=!4m5!3m4!1s0x8c036fcaaca69e1b:0xc5f2015e9f42fcd2!8m2!3d18.4498914!4d-66.0739543" target="_blank">
          <FontAwesomeIcon icon={['far', 'map']} style={iconFont} />
          1250 Avenida Juan Ponce de León 4th Floor, San Juan, 00907
        </a>
      </li>
    </ul>
  )
}

export default IconsComponent;
