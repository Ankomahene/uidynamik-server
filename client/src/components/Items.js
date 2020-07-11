import React from 'react';
import Item from './Item';

const Items = ({ items }) => {
	return (
		<div className="items">
			{items.length !== 0 ? (
				items.map(item => <Item key={item.title} item={item} />)
			) : (
				<h2 style={{ marginTop: '200px' }}> NO Matching Items found</h2>
			)}
		</div>
	);
};

export default Items;
