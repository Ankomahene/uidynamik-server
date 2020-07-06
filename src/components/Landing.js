import React from 'react';
import '../Styles/Landing.scss';
import { NavLink } from 'react-router-dom';

const Landing = () => {
	return (
		<div className="landing primary-bg">
			<div className="row">
				<div className="col col-1">
					<div className="welcome">WELCOME TO</div>
					<div className="title">CREATIVE DAILY UI </div>
					<p>Free Beautiful UIs for Frontend Developers</p>
					<NavLink to="/designs">
						<button>View Designs</button>
					</NavLink>
				</div>
				<div className="col col-2">
					<img src="./assets/images/futuristic_interface.svg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
