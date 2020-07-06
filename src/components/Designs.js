import React from 'react';
import Search from './Search';
import '../Styles/Designs.scss';
import Tags from './Tags';
import Items from './Items';

const Designs = () => {
	return (
		<div>
			<div className="top-section">
				<Search />
				<Tags />
			</div>
			<div className="main-content">
				<Items />
			</div>
		</div>
	);
};

export default Designs;
