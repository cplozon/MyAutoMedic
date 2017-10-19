import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Feature from './Feature'
import Form from './Form'
import Post from './Post'
import Contact from './Contact'

const pic1 = require('../../assets/images/pic01.jpg')
const pic2 = require('../../assets/images/pic02.jpg')
const pic3 = require('../../assets/images/pic03.jpg')

export default (props) => {
	return (
		<div>
			<Sidebar />
			<div id="wrapper">
				<section id="intro" className="wrapper style1 fullscreen fade-up">
					<div className="inner">
						<h1>My Auto Medic</h1><br />
						<p>Your one resource for Do It Yourself car repairs and other diagnostic information. <br />
						Supplying top rated how to videos, articles, step by step diagnosis, and your local mechanic information.</p><br />
						<p>The Most Helpful YouTube Videos Based On Your Search</p><br />
						<p>Top Articles From The Best DIY Mechanic Sites</p><br />
						<p>Diagnostic Question And Answer For An Accurate Diagnosis</p><br />
						<p>On-Board Diagnostic (OBD) Diagnostic Search</p><br />
						<p>Local Mechanics In Your Area</p><br />
						<ul className="actions">
							<li><a href="#one" className="button scrolly">Find A Solution Now</a></li>
						</ul>
					</div>
				</section>

				<section id="one" className="wrapper style2 spotlights">
					<Post title="Search Your Car Problem" image={pic1} text="Search Now For The Best Information Available" />
					<Post title="My Auto Medic Diagnostic Tool" image={pic3} text="Use Our Unique Step By Step Diagnostic Tool" />
					<Post title="Search Your ODM Code" image={pic3} text="Search ODM Code" />
					<Post title="Find The Best Local Mechanics In Your Area" image={pic3} text="Use Our Unique Step By Step Diagnostic Tool" />
				</section>

				<section id="two" className="wrapper style3 fade-up">
					<div className="inner">
						<h2>Account Log In</h2>
						<p>Sign In My Account</p>
						<div className="features">
							<Feature icon="icon major fa-code" />
							<Feature icon="icon major fa-lock" />
						</div>
						<ul className="actions">
							<li><a href="#" className="button">Learn more</a></li>
						</ul>
					</div>
				</section>

				// <section id="three" className="wrapper style1 fade-up">
				// 	<div className="inner">
				// 		<h2>Get in touch</h2>
				// 		<p>Duis aliquam turpis mauris, eu ultricies erat malesuada </p>
				// 		<div className="split style1">
				// 			<section>
				// 				<Form />
				// 			</section>
				// 			<Contact />
				// 		</div>
				// 	</div>
				// </section>

			</div>
			<Footer />
		</div>
	)
}
