import React from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import IconsComponent from "../components/contactIcons";

export default () => (
  <Layout>
		<Fade delay={300}>
			<Helmet title="Armando André: Contact" defer={false} />
    	<div id="colorlib-contact">
				<div className="container">
					<div className="row text-center">
						<h2 className="bold">Contact</h2>
					</div>
					<div className="row">
						<div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
							<span>Contact</span>
							<h2>Reach Me</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="rotate">
								<h2 className="heading">Contact</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-md-offset-0">
							<div className="row">
								<div className="col-md-4 animate-box">
									<h3>Social Info</h3>
									<IconsComponent />
								</div>
								<div className="col-md-7 col-md-push-1 animate-box">
									<h3>Feel free to contact me if you have questions like: </h3>
									<div className="row">
										<ul>
											<p>What is a Software Engineer / Fullstack Developer.</p>
											<p>The pricing of a website, gallery, blog, portfolio, etc.</p>
											<p>A topic that have not been answered in any of the portfolio pages.</p>
											<p>Availability of working or coworking with a company, freelancer, agency, etc.</p>
											<p>How a Software Engineer / Fullstack Developer make your business increase sales.</p>
											<p>Any Other</p>
										</ul>
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