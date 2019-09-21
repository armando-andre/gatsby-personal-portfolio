import React from "react";
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Fade from 'react-reveal/Fade'

import Layout from "../components/layout"
// import IdeasImages from "../components/ideasImages"

const textAlign = {
	width: '100%',
	margin: '0 auto'
}

const WorksPage = (props) => {
	return (
		<Layout>
				<div id="colorlib-work" className="bottom-padding-remover">
					<div className="container">
						<div className="row text-center">
							<h2 className="bold">Works</h2>
						</div>
						<div className="row">
							<div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
								<span>Portfolio</span>
								<h2>Experience / Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="rotate">
									<h2 className="heading">Portfolio</h2>
								</div>
							</div>
						</div>
					

							<div className="col-md-12">
							<div className="work-entry animate-box">
								<a href="https://www.accountberry.com" target="_blank">
									<Img className="works-images" fluid={props.data.uniqorns.childImageSharp.fluid} />
								</a>
								<div className="col-md-4 col-md-offset-4" style={textAlign}>
									<h1>UNIQORNS</h1>
									<div className="desc">
										<p>
											Uniquorns take care of developing unique brands and websites, 
											was designed to provide a perfect, 
											efficient and consistent experience for each client.
										</p>
										<p className="read">
											<a href="work.html" target="_blank">View Details</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-md-12">
							<div className="work-entry animate-box">
							<Fade>
								<a href="https://www.accountberry.com" target="_blank">
									<Fade>
										<Img className="works-images" fluid={props.data.accountberry.childImageSharp.fluid} />
									</Fade>
								</a>
								<div className="col-md-4 col-md-offset-4" style={textAlign}>
									<h1>ACCOUNTBERRY</h1>
									<div className="desc">
										<p>
											Accountberry improve business processes to help users save time completing tasks
											while having the essential insights of the business at the grasp of their hands. 
											We are very proud of being the sweetest accounting software in the market.
										</p>
										<p className="read">
											<a href="work.html" target="_blank">View Details</a>
										</p>
									</div>
								</div>
								</Fade>
							</div>
						</div>
					

						<div className="col-md-12">
							<div className="work-entry animate-box">
								<div className="work-entry animate-box">
									<a href="https://omnifood-au7u87zcs.now.sh" target="_blank">
										<Img className="works-images" fluid={props.data.omnifood.childImageSharp.fluid} />
									</a>
									<div className="col-md-4 col-md-offset-4" style={textAlign}>
										<h1>OMNIFOOD</h1>
										<div className="desc">
											<p>
												Omnifood, your new premium food delivery service. 
												We know you’re always busy. No time for cooking. 
												So let us take care of that, we’re really good at it, we promise.
											</p>
											<p className="read">
												<a href="work.html" target="_blank">View details</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					
					</div>
				</div>

			
				<div id="colorlib-about" className="bottom-padding-remover">
					<div className="container">
						<div className="row text-center">
							<h2 className="bold">Ideas</h2>
						</div>
						<div className="row">
							<div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
								<span>Examples</span>
								<h2>Your Future Website</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="rotate">
									<h2 className="heading">Examples</h2>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
      					<div className="work-entry animate-box">
									<Img fluid={props.data.picture1.childImageSharp.fluid} />
								</div>
    					</div>						

						<div className="col-md-12">
							<div className="work-entry animate-box">
								<Img fluid={props.data.picture2.childImageSharp.fluid} />
							</div>
    				</div>
						<div className="col-md-12">
							<div className="work-entry animate-box">
								<Img fluid={props.data.picture3.childImageSharp.fluid} />
							</div>
    				</div>

						<div className="col-md-12">
							<div className="work-entry animate-box">
								<Img fluid={props.data.picture4.childImageSharp.fluid} />
							</div>
    				</div>

						<div className="col-md-12">
							<div className="work-entry animate-box">
								<Img fluid={props.data.picture5.childImageSharp.fluid} />
							</div>
    				</div>

						<div className="col-md-12">
							<div className="work-entry animate-box">
								<Img fluid={props.data.picture6.childImageSharp.fluid} />
							</div>
    				</div>

						<div className="col-md-12">
							<div className="work-entry animate-box">
								<Img fluid={props.data.picture7.childImageSharp.fluid} />
							</div>
    				</div>

						<div className="col-md-12">
							<div className="work-entry animate-box">
								<Img fluid={props.data.picture8.childImageSharp.fluid} />
							</div>
    				</div>

						<div className="col-md-12">
							<div className="work-entry animate-box">
								<Img fluid={props.data.picture9.childImageSharp.fluid} />
							</div>
    				</div>

							<div className="col-md-4 col-md-offset-4 margin-bottom" style={textAlign}>
								<h1>NOTE</h1>
								<div className="desc">
									<p>
										If yo did not find what you where looking for, don't worry!
										Just contact me to start creating your own idea from scratch.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
		</Layout>
	)
}

export const worksImageComponent = graphql`
	fragment worksImageComponent on File {
		childImageSharp {
			fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
			}
		}
	}
`

export const worksPageQuery = graphql`
	query {
		uniqorns: file(relativePath: {eq: "uniqorns.png"}) {
			...worksImageComponent
		}
		accountberry: file(relativePath: {eq: "accountberry.png"}) {
			...worksImageComponent
		}
		omnifood: file(relativePath: {eq: "omnifood.jpg"}) {
			...worksImageComponent
		}

		picture1: file(relativePath: {eq: "picture1.png"}) {
			...worksImageComponent
		}
		picture2: file(relativePath: {eq: "picture2.png"}) {
			...worksImageComponent
		}
		picture3: file(relativePath: {eq: "picture3.png"}) {
			...worksImageComponent
		}
		picture4: file(relativePath: {eq: "picture4.png"}) {
			...worksImageComponent
		}
		picture5: file(relativePath: {eq: "picture5.png"}) {
			...worksImageComponent
		}
		picture6: file(relativePath: {eq: "picture6.png"}) {
			...worksImageComponent
		}
		picture7: file(relativePath: {eq: "picture7.png"}) {
			...worksImageComponent
		}
		picture8: file(relativePath: {eq: "picture8.png"}) {
			...worksImageComponent
		}
		picture9: file(relativePath: {eq: "picture9.png"}) {
			...worksImageComponent
		}
	}
`

export default WorksPage;