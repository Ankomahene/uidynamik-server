import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Details.scss';
import { ShareIcon } from './Icons';
import metadata from '../metadata/metadata';

const Details = () => {
	const { id, title } = useParams();
	const [ data ] = useState(metadata);

	return data.map(
		item =>
			(item.id === id) & (item.title === title) ? (
				<div key={item.id} className="details">
					<div className="row">
						<div className="col-11 col-lg-8 mx-auto">
							<div className="details__image">
								<div className="details__image-top">
									<div className="details__image-top__tag">
										<img src={`/assets/images/${item.tag}.svg`} alt="" width="100%" />
									</div>
									<div className="details__image-top__share">
										<button className="details__image-top__share-btn">
											<ShareIcon /> Share
										</button>
									</div>
								</div>

								<img
									src={`/assets/images/components-images/${item.image}.png`}
									alt=""
									width="100%"
									className="img-thumbnail"
								/>
							</div>
						</div>
						<div className="col-11 col-lg-4 mx-auto">
							<div className="details__description">
								<div className="details__description-title">{item.title}</div>

								<div className="details__description-stacks">
									{item.stacks.map(stack => (
										<div key={stack} className="stack">
											{stack}
										</div>
									))}
								</div>
								<div className="details__description-created-at">Created: {item.date}</div>
								<div className="details__description-info">{item.description}</div>

								<div className="details__description-ad">
									<h4> YOUR AD COULD GO HERE </h4>
									<button className="contact-btn">Contact Us to advertise</button>
								</div>
								<div className="details__description-download-btn">
									<a href={`/api/files/${item.id}?filename=${item.image}.zip`}>
										<button className="download-btn">Free Download</button>
									</a>
								</div>
								<div className="details__description-color-palette">
									<div className="palette-header">Color Palette</div>
									<div className="notice">Click the color to copy</div>
									{item.colors.map(color => (
										<div key={color} className="palette">
											<div className="palette-info">
												<div className="color-bg" style={{ backgroundColor: `#${color}` }} />
												<div className="color-code">#{color} </div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				undefined
			)
	);
};

export default Details;
