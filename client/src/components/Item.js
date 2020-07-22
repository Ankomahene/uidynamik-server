import React from 'react';
import '../Styles/Item.scss';
import { NavLink } from 'react-router-dom';
import { DownloadIcon } from './Icons';

const Item = ({ item }) => {
	return (
		<div className="card my-2" style={{ width: '100%' }}>
			<NavLink to={`/designs/${item.id}/${item.title}`} className="card-item">
				<img src={`/assets/images/components-images/${item.image}.png`} alt="" width="100%" />
				<div className="card-body">
					<div className="card-title d-flex justify-content-between align-items-center text-secondary">
						<h4>{item.title}</h4>
						<img
							src={`/assets/images/${item.tag}.svg`}
							width="30px"
							className="border rounded-circle p-1"
							alt=""
						/>
					</div>
					<div className="row">
						<div className="col text-muted mt-2">
							<p>{item.date}</p>
						</div>
						<div>
							<button className="download-btn">
								Download <DownloadIcon />
							</button>
						</div>
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default Item;
