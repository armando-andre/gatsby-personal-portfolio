import React from "react";
import Fade from 'react-reveal/Fade';
import Carousel from 'react-bootstrap/Carousel'

import Layout from "../components/layout";

export default () => (
  <Layout>
		<Fade delay={500}>
			<div id="colorlib-services">
				<div className="container">
					<div className="row text-center">
						<h2 className="bold">Services</h2>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="services-flex">
								<div className="one-third">
									<div className="row">
										<div className="col-md-12 col-md-offset-0 animate-box intro-heading">
											<span>Technologies</span>
											<h2>What I Use To Work</h2>
										</div>
									</div>
									<div className="container">
										<div className="row">
											<div className="col-md-12">
												<div className="rotate">
													<h2 className="heading">Technologies</h2>
												</div>
											</div>
											<div className="col-sm col-md">
												<div className="services animate-box">
													<h3>LANGUAGES</h3>
													<ul>
														<li>Javascript</li>
													</ul>
												</div>
												<div className="services animate-box">
													<h3>UI / UX Design</h3>
													<ul>
														<li>React</li>
														<li>Ember</li>
														<li>Gatsby</li>
														<li>Zeit Next</li>
													</ul>
												</div>
												<div className="services animate-box">
													<h3>WORK TOOLS</h3>
													<ul>
														<li>Postman</li>
														<li>Insomnia</li>
														<li>MongoLab</li>
														<li>GitHub / GitLab</li>
														<li>Affinity Designer</li>
														<li>GraphQL Playground</li>
														<li>Visual Studio Code</li>
													</ul>
												</div>
											</div>

											<div className="col-sm col-md">
												<div className="services animate-box">
													<h3>TESTING</h3>
													<ul>
														<li>Jest (Soon)</li>
													</ul>
												</div>
												<div className="services animate-box">
													<h3>Data Bases</h3>
													<ul>
														<li>MongoDB</li>
														<li>MongoDB Atlas</li>
														<li>MySQL (Soon)</li>
														<li>Google Firebase</li>
													</ul>
												</div>
												<div className="services animate-box">
													<h3>LIBRARIES</h3>
													<ul>
														<li>JQuery</li>
														<li>Request</li>
														<li>Express</li>
														<li>Mongoose</li>
														<li>Bootstrap</li>
														<li>Semantic UI</li>
														<li>React-Bootstrap</li>
													</ul>
												</div>
											</div>

											<div className="col-sm col-md ">
												<div className="services animate-box">
													<h3>DEPLOYMENT</h3>
													<ul>
														<li>Zeit Now</li>
													</ul>
												</div>
												<div className="services animate-box">
													<h3>OTHERS</h3>
													<ul>
														<li>Node JS</li>
														<li>GraphQL</li>
														<li>RESTful API's</li>
														<li>CSS / SASS / Flexbox</li>
													</ul>
												</div>
												<div className="services animate-box">
													<h3>Long Term Learning</h3>
													<ul>
														<li>Swift</li>
														<li>Redux</li>
														<li>Meteor</li>
														<li>Laravel</li>
														<li>Tensor Flow</li>
														<li>Apollo Client</li>
														<li>Google Flutter</li>
													</ul>
												</div>
											</div>
										</div>
									</div>							
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="colorlib-progress">
				<div className="container">
					<div className="row text-center">
						<h2 className="bold">Skills</h2>
					</div>
					<div className="row">
						<div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
							<span>Stregths</span>
							<h2>Overall Knowledge</h2>
						</div>
						<div className="col-md-12">
							<div className="rotate">
								<h2 className="heading">Stregths</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-sm-6 text-center">
							<h2 className="progress-head">Fast Learner</h2>
							<div className="progress blue">
								<span className="progress-left">
									<span className="progress-bar"></span>
								</span>
								<span className="progress-right">
									<span className="progress-bar"></span>
								</span>
								<div className="progress-value">Experienced</div>
							</div>
						</div>
				
						<div className="col-md-3 col-sm-6 text-center">
							<h2 className="progress-head">Javascript</h2>
							<div className="progress yellow">
								<span className="progress-left">
									<span className="progress-bar"></span>
								</span>
								<span className="progress-right">
									<span className="progress-bar"></span>
								</span>
								<div className="progress-value">Intermediate</div>
							</div>
						</div>

						<div className="col-md-3 col-sm-6 text-center">
							<h2 className="progress-head">Front-End</h2>
							<div className="progress pink">
								<span className="progress-left">
									<span className="progress-bar"></span>
								</span>
								<span className="progress-right">
									<span className="progress-bar"></span>
								</span>
								<div className="progress-value">Experienced</div>
							</div>
						</div>

						<div className="col-md-3 col-sm-6 text-center">
							<h2 className="progress-head">Back-End</h2>
							<div className="progress green">
								<span className="progress-left">
									<span className="progress-bar"></span>
								</span>
								<span className="progress-right">
									<span className="progress-bar"></span>
								</span>
								<div className="progress-value">Beginer</div>
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
							<Carousel.Item className="carousel-item">
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
							<Carousel.Item className="carousel-item">
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
							<Carousel.Item className="carousel-item">
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
							<Carousel.Item className="carousel-item">
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
)