import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { id, title, city, state, image, price } = this.props.listing;
		return (
			<div className="listing-item-container">
				<Link className="listing-item" to={`/listings/${id}`}>
					<ul className="listing-preview">
						<li className="preview-image">
							<img className="listing-preview-image" src={image} />
						</li>
						<li className="listing-preview-title">{title}</li>
						<div className="listing-preview-city-state">
							{city}, &nbsp;{state}
						</div>
						<li className="listing-preview-price">From &nbsp;${price} &nbsp;per &nbsp;night</li>

						<br />
					</ul>
				</Link>
			</div>
		);
	}
}

export default withRouter(ListingIndexItem);
