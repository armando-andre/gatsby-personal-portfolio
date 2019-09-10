import React from "react";

import Layout from "../components/layout";
import AboutIntro from "../components/aboutIntro"

export default () => (
  <Layout>
    <AboutIntro />
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
											<h3 className="margin-top margin-left">Clarity:</h3><p className="margin-left">Easy to read and oversee for anyone who isn’t the creator of the code. If it’s easy to understand, it’s much easier to maintain and extend the code. Not just computers, but also humans need to understand it.</p>
											<h3 className="margin-top margin-left">Maintainable:</h3><p className="margin-left">A high-quality code isn’t overcomplicated. It’s always recommended to add comments to the code to explain its role and functions. It makes it much easier for anyone who didn’t take part in writing the code to understand and maintain it.</p>
											<h3 className="margin-top margin-left">Refactored:</h3><p className="margin-left">Code formatting needs to be consistent and follow the language’s coding conventions.</p>
											<h3 className="margin-top margin-left">Extensible:</h3><p className="margin-left">When software is estensible is designed so that users or developers can expand or add to its capabilities.</p>
											<h3 className="margin-top margin-left">Efficiency:</h3><p className="margin-left">High-quality code doesn’t use unnecessary resources to perform a desired action.</p>
										</div>
										<div className="services animate-box">
											<h3>2 - Customer Satisfaction</h3>
											<p>I listen to my clients and take care of their situations as quickly as I can in order to provide them the best possible service.
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
  </Layout>
)