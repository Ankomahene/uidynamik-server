import React from 'react';
import '../Styles/Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="page-header-wrapper">
			<div className="page-header">
				<NavLink to="/" className="header-text">
					<h2>UI Dynamik</h2>
				</NavLink>
				<div className="handles">
					<div className="name">
						<small>
							By: Shadrack <span className="surname">Ankomahene</span>
						</small>
					</div>
					<div>
						<a href="https://github.com/Ankomahene">
							<img src="/assets/images/github.svg" alt="" />
						</a>
						<a href="https://twitter.com/Mister_Shadrack">
							<img src="/assets/images/twitter.svg" alt="" />
						</a>
						<a href="https://www.facebook.com/shadrack.ankomahene.1">
							<img src="/assets/images/facebook.svg" alt="" />
						</a>
						<a href="https://www.instagram.com/mister_shadrackk">
							<img src="/assets/images/instagram.svg" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
