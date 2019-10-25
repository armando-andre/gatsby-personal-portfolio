import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

import Layout from "../components/layout"
import IdeasImages from "../components/ideasImages"

const textAlign = {
	width: "100%",
	margin: "0 auto"
}

const borderRadius = {
  borderRadius: "5px"
}

const WorksPage = (props) => {
  return (
    <Layout>
			<Helmet title="Armando André: Ideas" defer={false} />
      <Fade delay={500}>
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
              <IdeasImages>
                <Img fluid={props.data.picture1.childImageSharp.fluid} style={borderRadius} />
              </IdeasImages>

              <IdeasImages>
								<Img fluid={props.data.picture2.childImageSharp.fluid} style={borderRadius} />
							</IdeasImages>

							<IdeasImages>
								<Img fluid={props.data.picture3.childImageSharp.fluid} style={borderRadius} />
							</IdeasImages>

              <IdeasImages>
								<Img fluid={props.data.picture4.childImageSharp.fluid} style={borderRadius} />
							</IdeasImages>
            </div>
            <div className="row">
              <IdeasImages>
                <Img fluid={props.data.picture5.childImageSharp.fluid} style={borderRadius} />
              </IdeasImages>

              <IdeasImages>
								<Img fluid={props.data.picture6.childImageSharp.fluid} style={borderRadius} />
							</IdeasImages>

							<IdeasImages>
								<Img fluid={props.data.picture7.childImageSharp.fluid} style={borderRadius} />
							</IdeasImages>

              <IdeasImages>
								<Img fluid={props.data.picture8.childImageSharp.fluid} style={borderRadius} />
							</IdeasImages>
            </div>
            <div className="row">
              <IdeasImages>
                <Img fluid={props.data.picture9.childImageSharp.fluid} style={borderRadius} />
              </IdeasImages>
							<IdeasImages>
                <Img fluid={props.data.picture10.childImageSharp.fluid}style={borderRadius} />
              </IdeasImages>
							<IdeasImages>
                <Img fluid={props.data.picture11.childImageSharp.fluid}style={borderRadius} />
              </IdeasImages>
							<IdeasImages>
                <Img fluid={props.data.picture12.childImageSharp.fluid}style={borderRadius} />
              </IdeasImages>
            </div>
						<div className="col-md-4 col-md-offset-4 margin-bottom" style={textAlign}>
							<h1>NOTE</h1>
							<div className="desc">
								<p>
									If yo did not find what you where looking for, don"t worry!
									Just contact me to start creating your own idea from scratch.
								</p>
							</div>
						</div>
          </div>
        </div>			
      </Fade>			
    </Layout>
  );
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
		picture10: file(relativePath: {eq: "picture10.png"}) {
			...worksImageComponent
		}
		picture11: file(relativePath: {eq: "picture11.png"}) {
			...worksImageComponent
		}
		picture12: file(relativePath: {eq: "picture12.png"}) {
			...worksImageComponent
		}
	}
`

export default WorksPage;