import React from "react";
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import WorkImages from "../components/workImages";

const textAlign = {
	width: "100%",
	margin: "0 auto"
}

const WorksPage = (props) => {
	return (
		<Layout>
			<Fade delay={1000}>
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
					
						<WorkImages>
							<a href="https://uniqorns-website.leodrez.now.sh" target="_blank" rel="noopener noreferrer">
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
										<a href="https://uniqorns-website.leodrez.now.sh" target="_blank" rel="noopener noreferrer">View Details</a>
									</p>
								</div>
							</div>
						</WorkImages>
						
						<WorkImages>
							<a href="https://www.accountberry.com" target="_blank" rel="noopener noreferrer">
								<Img className="works-images" fluid={props.data.accountberry.childImageSharp.fluid} />
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
										<a href="https://www.accountberry.com" target="_blank" rel="noopener noreferrer">View Details</a>
									</p>
								</div>
							</div>
						</WorkImages>

						<WorkImages>
							<a href="https://omnifood-au7u87zcs.now.sh" target="_blank" rel="noopener noreferrer">
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
										<a href="https://omnifood-au7u87zcs.now.sh" target="_blank" rel="noopener noreferrer">View details</a>
									</p>
								</div>
							</div>
						</WorkImages>
					</div>
				</div>
			</Fade>
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
	}
`

export default WorksPage;