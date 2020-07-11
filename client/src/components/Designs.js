import React, { useState } from 'react';
import Search from './Search';
import '../Styles/Designs.scss';
import Tags from './Tags';
import Items from './Items';
import metadata from '../metadata/metadata';

const Designs = () => {
	const [ items ] = useState(metadata);
	const [ searchText, setSearchText ] = useState('');

	const filteredItems = items.filter(data => {
		return (
			data.title.toLowerCase().includes(searchText.toLowerCase()) ||
			data.description.toLowerCase().includes(searchText.toLowerCase()) ||
			data.date.toLowerCase().includes(searchText.toLowerCase())
		);
	});

	return (
		<div>
			<div className="top-section">
				<Search onSearchChange={e => setSearchText(e.target.value)} />
				<Tags />
			</div>
			<div className="main-content">
				<Items items={filteredItems} />
			</div>
		</div>
	);
};

export default Designs;
