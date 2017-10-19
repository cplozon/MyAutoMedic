import React, { Component } from 'react'

class Sidebar extends Component {
	render(){
		return (
			<section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							<li><a href="#intro">My Auto Medic</a></li>
							<li><a href="#one">DIY Car Repair Resources</a></li>
							<li><a href="#one">Diagnose Your Car Problem</a></li>
							<li><a href="#two">Find A Mechanic</a></li>
							<li><a href="#three">Account Log In</a></li>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}

export default Sidebar