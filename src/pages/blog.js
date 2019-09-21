import React from "react";
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout";
import BlogImages from "../components/blogImages"

const BlogPage = (props) => (
  <Layout>
		<Fade delay={500}>
    	<div id="colorlib-blog">
				<div className="container">
					<div className="row text-center">
						<h2 className="bold">Blog</h2>
					</div>
					<div className="row">
						<div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
							<span>Blog</span>
							<h2>Interested On Reading?</h2>
							<h3>(Coming Soon)</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="rotate">
								<h2 className="heading">Blog</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog1.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog2.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog3.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog4.childImageSharp.fluid}/>
							</BlogImages>
						</div>

						<div className="col-md-4">
							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog5.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog6.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog7.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog8.childImageSharp.fluid}/>
							</BlogImages>
						</div>

						<div className="col-md-4">
							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog9.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog10.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog11.childImageSharp.fluid}/>
							</BlogImages>

							<BlogImages>
								<Img className="img-responsive" fluid={props.data.blog12.childImageSharp.fluid}/>
							</BlogImages>
						</div>
					</div>
				</div>
			</div>
		</Fade>
  </Layout>
)

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
		blog1: file(relativePath: {eq: "blog1.jpeg"}) {
			...aboutImageComponent
		}
		blog2: file(relativePath: {eq: "blog2.jpeg"}) {
			...aboutImageComponent
		}
		blog3: file(relativePath: {eq: "blog3.jpeg"}) {
			...aboutImageComponent
		}
		blog4: file(relativePath: {eq: "blog4.jpeg"}) {
			...aboutImageComponent
		}
		blog5: file(relativePath: {eq: "blog5.jpeg"}) {
			...aboutImageComponent
		}
		blog6: file(relativePath: {eq: "blog6.jpeg"}) {
			...aboutImageComponent
		}
		blog7: file(relativePath: {eq: "blog7.jpeg"}) {
			...aboutImageComponent
		}
		blog8: file(relativePath: {eq: "blog8.jpeg"}) {
			...aboutImageComponent
		}
		blog9: file(relativePath: {eq: "blog9.jpeg"}) {
			...aboutImageComponent
		}
		blog10: file(relativePath: {eq: "blog10.jpeg"}) {
			...aboutImageComponent
		}
		blog11: file(relativePath: {eq: "blog11.jpeg"}) {
			...aboutImageComponent
		}
		blog12: file(relativePath: {eq: "blog12.jpeg"}) {
			...aboutImageComponent
		}
	}
`

export default BlogPage;