import React from 'react';
import '../Styles/Search.scss';

const Search = ({ onSearchChange }) => {
	return (
		<div className="search-field">
			<img src="/assets/icons/search.svg" alt="" title="search" className="icon" />
			<input type="text" placeholder="Search" onChange={onSearchChange} />
		</div>
	);
};

export default Search;
