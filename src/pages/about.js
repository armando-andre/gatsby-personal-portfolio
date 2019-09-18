import React from "react";
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Fade from 'react-reveal/Fade';
import Carousel from 'react-bootstrap/Carousel'

import Layout from "../components/layout";

const AboutPage= (props) => {
	return (
		<Layout>
			<Fade delay={500}>
				<div id="colorlib-about">
					<div className="container">
						<div className="row text-center">
							<h2 className="bold">About</h2>
						</div>
						<div className="row row-padded-bottom">
							<div className="col-md-5 animate-box">
								<Carousel slide={false} interval={3000} style={{width: '100%'}} pauseOnHover={false} controls={false}>
									<Carousel.Item classNameName="carousel-item">
										<Img fluid={props.data.portrait2.childImageSharp.fluid} />
									</Carousel.Item>
									<Carousel.Item classNameName="carousel-item">
										<Img fluid={props.data.portrait1.childImageSharp.fluid} />
									</Carousel.Item>
									<Carousel.Item classNameName="carousel-item">
										<Img fluid={props.data.portrait3.childImageSharp.fluid} />
									</Carousel.Item>
								</Carousel>
							</div>
							<div className="col-md-6 col-md-push-1 animate-box">
								<div className="about-desc">
									<Carousel slide={false} interval={3000} pauseOnHover={false} controls={false}>
										<Carousel.Item classNameName="carousel-item">
											<h2>
												<span>Armando André</span>
											</h2>
										</Carousel.Item>
										<Carousel.Item classNameName="carousel-item">
											<h2>
												<span>Software Engineer</span>
											</h2>
										</Carousel.Item>
										<Carousel.Item classNameName="carousel-item">
											<h2>
												<span>Fullstack Developer</span>
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
										<p>
											<a href="work.html" className="btn btn-primary btn-outline">View My Works</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					{/* <div className="intro-heading">
						<h1>My Code Is</h1>
					</div>				
					<ul>
						<li className="services">
							<h3>Readable</h3>
						</li>
						<li className="services">
							<h3>Correct</h3>
						</li>
						<li className="services">
							<h3>Reliable</h3>
						</li>
						<li className="services">
							<h3>Reusable</h3>
						</li>
						<li className="services">
							<h3>Extendable</h3>
						</li>
						<li className="services">
							<h3>Flexible</h3>
						</li>
						<li className="services">
							<h3>Efficient</h3>
						</li>
					</ul> */}
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
											<div className="col-md-12 col-md-offset-0 animate-box intro-heading">
												<span>Process</span>
												<h1>Big Picture</h1>
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
													<h3>More than work, study</h3>
												</div>
												<div className="services animate-box">
													<p>
														It’s important that we, as software engineers, 
														have goals for each year to help with our professional development. 
														Doing so will help to make sure we are keeping up with ever-changing technologies and
														taking opportunities for professional development and career growth.

														Each engineer should create a few goals per year and work with
														their leadership to track their progress towards completing these goals.
														It also helps to ensure that your leadership supports your ongoing career growth and
														development.
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
											<div className="col-md-12 col-md-offset-0 animate-box intro-heading">
												<span>Target</span>
												<h1>Goals</h1>
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
													<p className="margin-left">A high-quality code isn’t overcomplicated. It’s always recommended to add comments to the code to explain its role and functions. It makes it much easier for anyone who didn’t take part in writing the code to understand and maintain it.</p>
													<h3 className="margin-top margin-left">Refactored:</h3>
													<p className="margin-left">Code formatting needs to be consistent and follow the language’s coding conventions.</p>
													<h3 className="margin-top margin-left">Extensible:</h3>
													<p className="margin-left">When software is estensible is designed so that users or developers can expand or add to its capabilities.</p>
													<h3 className="margin-top margin-left">Efficiency:</h3>
													<p className="margin-left">High-quality code doesn’t use unnecessary resources to perform a desired action.</p>
												</div>
												<div className="services animate-box">
													<h3>2 - Customer Satisfaction</h3>
													<p>
														I listen to my clients and take care of their situations as quickly as I can in order to provide them the best possible service.
														Also I do my best my best giving them all their need to feel comfortable working with me.
														Don't be afraid, feel free to contact me and talk about your ideas to improve your future together.
													</p>
												</div>
												<div className="services animate-box">
													<h3>3 - Well Mantained Softwares</h3>
													<p>
														Software maintenance is an activity which includes optimization, 
														error correction, deletion of discarded features and enhancement of existing features. 
														Since these changes are necessary, a mechanism must be created for estimation, 
														controlling and making modifications. 
														The essential part of software maintenance requires preparation of 
														an accurate plan during the development cycle. 
														Typically, maintenance takes up about 40-80% of the project cost, 
														usually closer to the higher pole. 
														Hence, a focus on maintenance definitely helps keep costs down.
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

				<div id="colorlib-testimony">
					<div className="container">
						<div className="row text-center">
							<h2 className="bold">Reviews</h2>
						</div>
						<div className="row">
							<div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
								<span>Testimonies</span>
								<h2>Clients Says</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="rotate">
									<h2 className="heading">Testimonies</h2>
								</div>
							</div>
						</div>
						<div className="row animate-box">
							<Carousel slide={false} interval={4000} pauseOnHover={false}>
								<Carousel.Item classNameName="carousel-item">
									<div className="item">
										<div className="col-md-12 text-center">
											<div className="testimony">
												<blockquote>
													<p>
														"The style is really unique and I love it. 
														They really accomplished more than I expected."
														professional and courteous. 
														Definitely an asset to your company
													</p>
													<span> &mdash; George Brooks</span>
												</blockquote>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item classNameName="carousel-item">
									<div className="item">
										<div className="col-md-12 text-center">
											<div className="testimony">
												<blockquote>
													<p>
														"Five star performance and customer service. 
														All were professional and courteous. 
														Definitely an asset to your company."
													</p>
													<span>&mdash; Daniel Foster</span>
												</blockquote>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item classNameName="carousel-item">
									<div className="item">
										<div className="col-md-12 text-center">
											<div className="testimony">
												<blockquote>
													<p>
														"Outstanding price, service, hard working, polite men. 
														Truly impressed and by far the best in the business."
													</p>
													<span>&mdash; Liam Jenkins</span>
												</blockquote>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item classNameName="carousel-item">
									<div className="item">
										<div className="col-md-12 text-center">
											<div className="testimony">
												<blockquote>
													<p>
														"Above {'&'} totally beyond. 
														Really really awesome job and super gentleman. 
														Thank you, thank you!"
													</p>
													<span>&mdash; Jodie Lawson</span>
												</blockquote>
											</div>
										</div>
									</div>
								</Carousel.Item>
							</Carousel>
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