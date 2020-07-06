import React from 'react';
import '../Styles/Search.scss';

const Search = () => {
	return (
		<div className="search-field">
			<img src="/assets/icons/search.svg" alt="" title="search" className="icon" />
			<input type="text" placeholder="Search" />
		</div>
	);
};

export default Search;
