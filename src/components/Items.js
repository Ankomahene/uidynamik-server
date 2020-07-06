import React from 'react';
import Item from './Item';

const Items = () => {
	const items = [
		{
			title: 'search-component',
			description: 'component description',
			tag: 'react',
			date: 'July 4'
		},
		{
			title: 'search-component',
			description: 'component description',
			tag: 'angular',
			date: 'June 23'
		},
		{
			title: 'search-component',
			description: 'component description',
			tag: 'angular',
			date: 'June 15'
		}
	];
	return (
		<div className="items">{items.length !== 0 && items.map(item => <Item key={item.title} item={item} />)}</div>
	);
};

export default Items;
