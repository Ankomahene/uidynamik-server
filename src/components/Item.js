import React from 'react';
import '../Styles/Item.scss';

const Item = ({ item }) => {
	return (
		<div className="card">
			<div className="card-image">
				<img src="./assets/images/components-images/card-image.jpeg" alt="" />
			</div>
			<div className="card-content">
				<div className="card-title">
					<h3>{item.title}</h3>
					<img src={`/assets/images/${item.tag}.svg`} alt="" className="tag-icon" />
				</div>
				<div className="card-footer">
					<p>{item.date}</p>
					<button className="download-btn">
						Download <DownloadIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

const DownloadIcon = () => {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 16 16"
			class="bi bi-download"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"
			/>
			<path
				fill-rule="evenodd"
				d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"
			/>
			<path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z" />
		</svg>
	);
};

export default Item;
