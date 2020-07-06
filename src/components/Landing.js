import React from 'react';
import '../Styles/Landing.scss';

const Landing = () => {
	return (
		<div className="landing primary-bg">
			<div className="row">
				<div className="col col-1">
					<div className="welcome">WELCOME TO</div>
					<div className="title">CREATIVE DAILY UI </div>
					<p>Free Beautiful UIs for Frontend Developers</p>
					<button>View Designs</button>
				</div>
				<div className="col col-2">
					<img src="./assets/images/futuristic_interface.svg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
