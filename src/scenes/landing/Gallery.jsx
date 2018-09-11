import React from 'react';

const images = [
	'/assets/gallery/1.jpg',
	'/assets/gallery/2.jpg',
	'/assets/gallery/3.jpg',
	'/assets/gallery/4.jpg',
	'/assets/gallery/5.jpg',
	'/assets/gallery/6.jpg',
	'/assets/gallery/7.jpg',
	'/assets/gallery/8.jpg',
	'/assets/gallery/9.jpg',
	'/assets/gallery/10.jpg',
	'/assets/gallery/11.jpg',
];

export default class Gallery extends React.Component {
	state = {
		activeImage: images[0],
		animating: false
	};

	selectImage = image => {
		if (this.isActive(image)) {
			return;
		}

		this.setState({
			animating: true
		});

		setTimeout(() => this.setState({
			animating: false,
			activeImage: image
		}), 500);
	};

	isActive = image => image === this.state.activeImage;

	render() {
		return (
			<div className="gallery">
				<div className="gallery-active-image-wrapper">
					<img
						className={`gallery-active-image ${this.state.animating ? 'animation' : ''}`}
						src={this.state.activeImage}
						alt="image"
					/>
				</div>
				<div className="gallery-image-list">
					{images.map(image => (
						<img
							onClick={() => this.selectImage(image)}
							key={image}
							className={`image-list-item ${this.isActive(image) ? 'active' : ''}`}
							src={image}
							alt="image"
						/>
					))}
				</div>
			</div>
		);
	}
}