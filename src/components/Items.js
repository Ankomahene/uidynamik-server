import React, { useState } from 'react';
import Item from './Item';
import metadata from '../metadata/metadata';

const Items = () => {
	const [ items ] = useState(metadata);

	return (
		<div className="items">{items.length !== 0 && items.map(item => <Item key={item.title} item={item} />)}</div>
	);
};

export default Items;
