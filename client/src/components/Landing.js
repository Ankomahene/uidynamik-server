import React from 'react';
import '../Styles/Landing.scss';
import { NavLink } from 'react-router-dom';

const Landing = () => {
	return (
		<div className="landing primary-bg">
			<div className="row">
				<div className="col col-1">
					<div>
						<div className="welcome">WELCOME</div>
						<div className="title">BUILD FASTER AND BETTER.</div>
						<div className="info">Free & Beautiful Dynamic UI Choices for Developers.</div>
						<NavLink to="/designs">
							<button>View Designs</button>
						</NavLink>
					</div>
				</div>
				<div className="col col-2">
					<img src="./assets/images/banner-image.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
