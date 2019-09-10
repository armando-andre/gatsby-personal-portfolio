import React from "react";

import Layout from "../components/layout";
import "../components/index.css"

export default () => (
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

				<div className="row">
					<div className="col-md-12">
						<div className="work-entry animate-box">
							<a href="https://uniqorns-website.leodrez.now.sh" target="_blank">
								{/* <img className="works-images" src="./assets/images/uniqorns.png" /> */}
							</a>
							<div className="col-md-4 col-md-offset-4">
								<h1>UNIQORNS</h1>
								<div className="desc">
									<p>
										Uniquorns take care of developing unique brands and websites, 
										was designed to provide a perfect, 
										efficient and consistent experience for each client.
									</p>
									<p className="read">
										<a href="work.html" target="_blank">View details</a>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							<a href="https://www.accountberry.com" target="_blank">
								{/* <img className="works-images" src="./assets/images/accountberry.png" /> */}
							</a>
							<div className="col-md-4 col-md-offset-4">
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
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							<div className="work-entry animate-box">
								<a href="https://omnifood-au7u87zcs.now.sh" target="_blank">
									{/* <img className="works-images" src="./assets/images/omnifood.png" /> */}
								</a>
								<div className="col-md-4 col-md-offset-4">
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
							{/* <img className="works-images" src="./assets/images/picture1.png" /> */}
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							{/* <img className="works-images" src="./assets/images/picture2.png" /> */}
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							<div className="work-entry animate-box">
								{/* <img className="works-images" src="./assets/images/picture3.png" /> */}
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							<div className="work-entry animate-box">
								{/* <img className="works-images" src="./assets/images/picture4.png" /> */}
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							<div className="work-entry animate-box">
								{/* <img className="works-images" src="./assets/images/picture5.png" /> */}
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							<div className="work-entry animate-box">
								{/* <img className="works-images" src="./assets/images/picture6.png" /> */}
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							<div className="work-entry animate-box">
								{/* <img className="works-images" src="./assets/images/picture7.png" /> */}
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="work-entry animate-box">
							<div className="work-entry animate-box">
								{/* <img className="works-images" src="./assets/images/picture8.png" /> */}
							</div>
						</div>
					</div>

					<div className="col-md-4 col-md-offset-4 margin-bottom">
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