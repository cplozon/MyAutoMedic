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
						<h1>Hyperspace</h1>
						<p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br />
						and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p>
						<ul className="actions">
							<li><a href="#one" className="button scrolly">Learn more</a></li>
						</ul>
					</div>
				</section>

				<section id="one" className="wrapper style2 spotlights">
					<Post title="Sed ipsum dolor" image={pic1} text="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." />
					<Post title="Feugiat consequat" image={pic2} text="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis." />
					<Post title="Ultricies aliquam" image={pic3} text="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." />
				</section>

				<section id="two" className="wrapper style3 fade-up">
					<div className="inner">
						<h2>What we do</h2>
						<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
						<div className="features">
							<Feature icon="icon major fa-code" />
							<Feature icon="icon major fa-lock" />
							<Feature icon="icon major fa-cog" />
							<Feature icon="icon major fa-desktop" />
							<Feature icon="icon major fa-chain" />
							<Feature icon="icon major fa-diamond" />
						</div>
						<ul className="actions">
							<li><a href="#" className="button">Learn more</a></li>
						</ul>
					</div>
				</section>

				<section id="three" className="wrapper style1 fade-up">
					<div className="inner">
						<h2>Get in touch</h2>
						<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
						<div className="split style1">
							<section>
								<Form />
							</section>
							<Contact />
						</div>
					</div>
				</section>

			</div>
			<Footer />
		</div>
	)
}
