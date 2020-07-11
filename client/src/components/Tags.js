import React from 'react';
import '../Styles/Tags.scss';

const Tags = () => {
	return (
		<div className="tags">
			<button className="tag tag-all">All</button>
			<button className="tag tag-react">
				<img src="/assets/images/react.svg" alt="" className="tag-icon" />
			</button>
			<button className="tag tag-angular">
				<img src="/assets/images/angular.svg" alt="" className="tag-icon" />
			</button>
		</div>
	);
};

export default Tags;
