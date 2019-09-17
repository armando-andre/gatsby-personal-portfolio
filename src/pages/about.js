import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout";

const AboutPage= (props) => {
	return (
		<Layout>
			<Fade>
			<div id="colorlib-about">
			<div class="container">
				<div class="row text-center">
					<h2 class="bold">About</h2>
				</div>
				<div class="row row-padded-bottom">
					<div class="col-md-5 animate-box">
						<Img fluid={props.data.portrait1.childImageSharp.fluid} />					
					</div>
					<div class="col-md-6 col-md-push-1 animate-box">
						<div class="about-desc">
							<h2><span>Armando André</span></h2>
							<div class="desc">
								<div class="rotate">
									<h2 class="heading">About</h2>
								</div>
								<p>
									Welcome to my portfolio, 
									I am a self-taught software engineer focused on web technologies and
									growing my name as a personal business to help many with my skills and
									talent to understand computers. I have been using my knowledge to design,
									create, develop and implement applications and websites for more than a year.
								</p>
								<p class="colorlib-social-icons">
									<a href="https://linkedin.com/in/armando-calderon-927677171" 
									target="_blank">
										<i class="icon-margin icon-linkedin2"></i>
									</a>
									<a href="mailto: armandoandrecalderon@gmail.com?Subject=Contact%20for%20job">
										<i class="icon-margin icon-mail4"></i>
									</a>
									<a href="https://www.instagram.com/armando__andre/" 
									target="_blank">
										<i class="icon-margin icon-instagram"></i>
									</a>
									<a href="https://github.com/armando-andre" 
									target="_blank">
										<i class="icon-margin icon-github"></i>
									</a>
								</p>
								<p><a href="work.html" class="btn btn-primary btn-outline">View My Works</a></p>
							</div>
						</div>
					</div>
				</div>
				<div class="intro-heading">
					<h1>My Code Is</h1>
				</div>				
				<ul>
					<li class="services">
						<h3>Readable</h3>
					</li>
					<li class="services">
						<h3>Correct</h3>
					</li>
					<li class="services">
						<h3>Reliable</h3>
					</li>
					<li class="services">
						<h3>Reusable</h3>
					</li>
					<li class="services">
						<h3>Extendable</h3>
					</li>
					<li class="services">
						<h3>Flexible</h3>
					</li>
					<li class="services">
						<h3>Efficient</h3>
					</li>
				</ul>
			</div>
		</div>
		<div id="colorlib-work">
			<div class="container">
				<div class="row text-center">
					<h2 class="bold">Overview</h2>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="services-flex">
							<div class="one-third">
								<div class="row">
									<div class="col-md-12 col-md-offset-0 animate-box intro-heading">
										<span>Process</span>
										<h1>Big Picture</h1>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="rotate">
											<h2 class="heading">Overview</h2>
										</div>
									</div>
									<div class="col-md-12">
										<div class="services animate-box">
											<h3>More than work, study</h3>
										</div>
										<div class="services animate-box">
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
			<div class="container">
				<div class="row text-center">
					<h2 class="bold">Goals</h2>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="services-flex">
							<div class="one-third">
								<div class="row">
									<div class="col-md-12 col-md-offset-0 animate-box intro-heading">
										<span>Target</span>
										<h1>Goals</h1>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="rotate">
											<h2 class="heading">Goals</h2>
										</div>
									</div>
									<div class="col-md-12">
										<div class="services animate-box">
											<h3>1 - High Quality Code</h3>
											<h3 class="margin-top margin-left">Clarity:</h3><p class="margin-left">Easy to read and oversee for anyone who isn’t the creator of the code. If it’s easy to understand, it’s much easier to maintain and extend the code. Not just computers, but also humans need to understand it.</p>
											<h3 class="margin-top margin-left">Maintainable:</h3><p class="margin-left">A high-quality code isn’t overcomplicated. It’s always recommended to add comments to the code to explain its role and functions. It makes it much easier for anyone who didn’t take part in writing the code to understand and maintain it.</p>
											<h3 class="margin-top margin-left">Refactored:</h3><p class="margin-left">Code formatting needs to be consistent and follow the language’s coding conventions.</p>
											<h3 class="margin-top margin-left">Extensible:</h3><p class="margin-left">When software is estensible is designed so that users or developers can expand or add to its capabilities.</p>
											<h3 class="margin-top margin-left">Efficiency:</h3><p class="margin-left">High-quality code doesn’t use unnecessary resources to perform a desired action.</p>
										</div>
										<div class="services animate-box">
											<h3>2 - Customer Satisfaction</h3>
											<p>I listen to my clients and take care of their situations as quickly as I can in order to provide them the best possible service.
												Also I do my best my best giving them all their need to feel comfortable working with me.
												Don't be afraid, feel free to contact me and talk about your ideas to improve your future together.
											</p>
										</div>
										<div class="services animate-box">
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
				<div class="container">
					<div class="row text-center">
						<h2 class="bold">Reviews</h2>
					</div>
					<div class="row">
						<div class="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
							<span>Testimonies</span>
							<h2>Clients Says</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="rotate">
								<h2 class="heading">Testimonies</h2>
							</div>
						</div>
					</div>
					<div class="row animate-box">
						<div class="owl-carousel">
							<div class="item">
								<div class="col-md-12 text-center">
									<div class="testimony">
										<blockquote>
											<p>
												"The style is really unique and I love it. 
												They really accomplished more than I expected."
											</p>
											<span> &mdash; George Brooks</span>
										</blockquote>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="col-md-12 text-center">
									<div class="testimony">
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
							<div class="item">
								<div class="col-md-12 text-center">
									<div class="testimony">
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
							<div class="item">
								<div class="col-md-12 text-center">
									<div class="testimony">
										<blockquote>
											<p>
												"Above & totally beyond. 
												Really really awesome job and super gentleman. 
												Thank you, thank you!"
											</p>
											<span>&mdash; Jodie Lawson</span>
										</blockquote>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
			</Fade>		
		</Layout>
	)
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
	}
`
export default AboutPage;