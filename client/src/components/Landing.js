import React from 'react';
import '../Styles/Landing.scss';
import { NavLink } from 'react-router-dom';

const Landing = () => {
	return (
		<div className="landing primary-bg d-flex align-items-center">
			<div className="row justify-content-center">
				<div className="col-11 col-sm-6 d-flex justify-content-center align-items-center">
					<div className="landing__info text-light text-center p-2">
						<div className="landing__info-welcome">WELCOME</div>
						<div className="title landing__info-title">BUILD FASTER AND BETTER.</div>
						<div className="landing__info-subtitle">
							Free & Beautiful Dynamic UI Choices for Developers.
						</div>
						<div className="mt-3">
							<NavLink to="/designs">
								<button className="landing__info-action">View Components</button>
							</NavLink>
						</div>
					</div>
				</div>
				<div className="col-11 col-sm-6 py-3 mt-2">
					<img src="assets/images/banner-image.png" alt="" width="100%" />
				</div>
			</div>
		</div>
	);
};

export default Landing;
