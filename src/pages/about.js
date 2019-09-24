import React from "react";
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import Carousel from "react-bootstrap/Carousel"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout";
import IconsComponent from "../components/aboutIcons";

const AboutPage = (props) => {
	return (
		<Layout>
			<Helmet title="Armando André: About" defer={false} />
			<Fade delay={300}>
				<div id="colorlib-about">
					<div className="container">
						<div className="row text-center">
							<h2 className="bold">About</h2>
						</div>
						<div className="row row-padded-bottom">
							<div className="col-md-5 animate-box" style={{marginRight: "70px"}}>
								<Carousel slide={false} interval={5000} pauseOnHover={false} controls={false} style={{width: "100%"}}>
									<Carousel.Item className="carousel-item">
										<Img style={{borderRadius: "5px"}} fluid={props.data.portrait2.childImageSharp.fluid} />
									</Carousel.Item>
									<Carousel.Item className="carousel-item">
										<Img style={{borderRadius: "5px"}} fluid={props.data.portrait1.childImageSharp.fluid} />
									</Carousel.Item>
									<Carousel.Item className="carousel-item">
										<Img style={{borderRadius: "5px"}} fluid={props.data.portrait3.childImageSharp.fluid} />
									</Carousel.Item>
								</Carousel>
							</div>
							<div className="col-md-6 col-md-push-1 animate-box">
								<div className="about-desc">
									<Carousel slide={false} interval={5000} pauseOnHover={false} controls={false} style={{width: "70vw"}}>
										<Carousel.Item className="carousel-item">
											<h2>
												<span>Armando André</span>
											</h2>
										</Carousel.Item>
										<Carousel.Item className="carousel-item">
											<h2>
												<span>Software Engineer</span>
											</h2>
										</Carousel.Item>
										<Carousel.Item className="carousel-item">
											<h2>
												<span>Full Stack Developer</span>
											</h2>
										</Carousel.Item>
									</Carousel>
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
										<IconsComponent />
										<p>
											<AniLink paintDrip hex="#000000" to="/contact" className="btn btn-primary btn-outline">
												Contact Me
											</AniLink>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>
			<Fade delay={300}>
				<div id="colorlib-work">
					<div className="container">
						<div className="row text-center">
							<h2 className="bold">Overview</h2>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="services-flex">
									<div className="one-third">
										<div className="row">
											<div className="col-md-12 col-md-offset-0 animate-box intro-heading text-center negative-margin-top">
												<span>Process</span>
												<h1 className="space-between-content">Big Picture</h1>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="rotate">
													<h2 className="heading">Overview</h2>
												</div>
											</div>
											<div className="col-md-12">
												<div className="services animate-box">
													<h3>Responsibility</h3>
												</div>
												<div className="services animate-box">
													<p>
														My role as a computer engineer is:
														Improve the quality of the system by identifying problems, common patterns and developing standard operating procedures.
														Improve applications by identifying opportunities for improvement, making recommendations and designing and implementing systems.
														Maintain and improve existing code bases and changes in the peer review code.
														Liaison with colleagues to implement technical designs.
														Research and use of new technologies when relevant.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		
				<div id="colorlib-services">
					<div className="container">
						<div className="row text-center">
							<h2 className="bold">Goals</h2>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="services-flex">
									<div className="one-third">
										<div className="row">
											<div className="col-md-12 col-md-offset-0 animate-box intro-heading text-center negative-margin-top">
												<span>Target</span>
												<h1 className="space-between-content">Focus</h1>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="rotate">
													<h2 className="heading">Goals</h2>
												</div>
											</div>
											<div className="col-md-12">
												<div className="services animate-box">
													<h3>1 - High Quality Code</h3>
													<h3 className="margin-top margin-left">Clarity:</h3>
													<p className="margin-left">Easy to read and oversee for anyone who isn’t the creator of the code. If it’s easy to understand, it’s much easier to maintain and extend the code. Not just computers, but also humans need to understand it.</p>
													<h3 className="margin-top margin-left">Maintainable:</h3>
													<p className="margin-left">A high-quality code isn’t over complicated. It’s always recommended adding comments to the code to explain its role and functions. It makes it much easier for anyone who didn’t take part in writing the code to understand and maintain it.</p>
													<h3 className="margin-top margin-left">Refactored:</h3>
													<p className="margin-left">Code formatting needs to be consistent and follow the language’s coding conventions.</p>
													<h3 className="margin-top margin-left">Extensible:</h3>
													<p className="margin-left">When software is extensible is designed so that users or developers can expand or add to its capabilities.</p>
													<h3 className="margin-top margin-left">Efficiency:</h3>
													<p className="margin-left">High-quality code doesn’t use unnecessary resources to perform a desired action.</p>
												</div>
												<div className="services animate-box">
													<h3>2 - Customer Satisfaction</h3>
													<p>
													I listen to my clients and take care of their situations as quickly as I can in order to provide them the best possible service.
													Also, I do my best giving them all their need to feel comfortable working with me.
													Don't be afraid, feel free to contact me and talk about your ideas to improve your future together.
													</p>
												</div>
												<div className="services animate-box">
													<h3>3 - Well Mantained Software</h3>
													<p>
														Software maintenance is an activity which includes optimization, 
														error correction, deletion of discarded features and enhancement of existing features. 
														Since these changes are necessary, a mechanism must be created for estimation, 
														controlling and making modifications. 
														The essential part of software maintenance requires preparation of 
														an accurate plan during the development cycle. 
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>	
		</Layout>
	);
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
		portrait1: file(relativePath: {eq: "portrait1.jpg"}) {
			...aboutImageComponent
		}
		portrait2: file(relativePath: {eq: "portrait2.jpg"}) {
			...aboutImageComponent
		}
		portrait3: file(relativePath: {eq: "portrait3.jpg"}) {
			...aboutImageComponent
		}
	}
`

export default AboutPage;