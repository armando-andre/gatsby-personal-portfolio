import React from "react"
import { Link } from "gatsby"

import "./index.css"

export default () => (
    <div id="colorlib-about" className="top">
      <div className="container">
        <div className="row text-center">
          <h2 className="bold">About</h2>
        </div>
        <div className="row">
          <div className="col-md-5 animate-box">
            <div className="owl-carousel3">
              <div className="item">
                {/* <img className="img-responsive about-img" 
                src="./assets/images/IMG_8733.JPG" 
                alt="html5 bootstrap template by colorlib.com" />
              </div>
              <div className="item">
                <img className="img-responsive about-img" 
                src="./assets/images/0111b1ce-77da-494a-b597-e72ade3e5ad5.JPG" 
                alt="html5 bootstrap template by colorlib.com" />
              </div>
              <div className="item">
                <img className="img-responsive about-img" 
                src="./assets/images/IMG_8727.JPG" 
                alt="html5 bootstrap template by colorlib.com" /> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-md-push-1 animate-box">
            <div className="about-desc">
              <div className="owl-carousel3">
                <div className="item">
                  <h2><span>Armando André</span></h2>
                </div>
                {/* <div className="item">
                  <h2><span>Software Engineer</span></h2>
                </div>
                <div className="item">
                  <h2><span>Fullstack Developer</span></h2>
                </div> */}
              </div>
              <div className="desc">
                <div className="rotate">
                  <h2 className="heading">About</h2>
                </div>
                <p>
                  Welcome to my portfolio, 
                  I am a self-taught software engineer focused on web technologies and
                  growing my name as a personal business to help many with my skills and
                  talent to understand computers. I have been using my knowledge to design,
                  create, develop and implement applications and websites for more than a year.
                </p>
                {/* <p className="colorlib-social-icons">
                  <a href="https://linkedin.com/in/armando-calderon-927677171" 
                  target="_blank">
                    <i className="icon-margin icon-linkedin2"></i>
                  </a>
                  <a href="mailto: armandoandrecalderon@gmail.com?Subject=Contact%20for%20job">
                    <i className="icon-margin icon-mail4"></i>
                  </a>
                  <a href="https://www.instagram.com/armando__andre/" 
                  target="_blank">
                    <i className="icon-margin icon-instagram"></i>
                  </a>
                  <a href="https://github.com/armando-andre" 
                  target="_blank">
                    <i className="icon-margin icon-github"></i>
                  </a>
                </p> */}
                <p><Link to="/contact" className="btn btn-primary btn-outline">Contact Me</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)