import React from 'react';
import Item from './Item';

const Items = ({ items }) => {
	return (
		<div className="row justify-content-center">
			{items.length !== 0 ? (
				items.map(item => (
					<div key={item.id} className="col-10 col-sm-6 col-md-4">
						<Item item={item} />
					</div>
				))
			) : (
				<div>
					<div class="alert alert-info" role="alert">
						<h4> No matching item found</h4>
					</div>
					<p>Component you are searching for does not exist Yet</p>
				</div>
			)}
		</div>
	);
};

export default Items;
