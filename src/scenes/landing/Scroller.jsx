import React from 'react';
import './scroller.less';

export class Scroller extends React.Component {
	componentDidMount() {
		document.addEventListener('scroll', this.shouldHaveScroller);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.shouldHaveScroller);
	}

	state = {
		isEnd: false
	};

	scroll = () => {
		const screenHeight = window.innerHeight;
		const currentScroll = document.documentElement.scrollTop;
		const scrollMultiplier = Math.floor(currentScroll / screenHeight) + 1;
		const positionToScroll = screenHeight * scrollMultiplier;
		let incrementer = currentScroll;
		const scrollIteration = () => {
			incrementer += 30;
			const iterationScroll = incrementer > positionToScroll ? positionToScroll : incrementer;

			window.scroll(0, iterationScroll);

			if (incrementer < positionToScroll) {
				requestAnimationFrame(scrollIteration);
			}
		};

		requestAnimationFrame(scrollIteration);
	};

	shouldHaveScroller = () => {
		const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		const currentScroll = document.documentElement.scrollTop;

		if (currentScroll >= maxScroll) {
			this.setState({
				isEnd: true
			});
		} else {
			this.setState({
				isEnd: false
			});
		}
	};

	render() {
		const {className} = this.props;
		const {isEnd} = this.state;

		if (isEnd) {
			return null;
		}

		return (
			<div className={`scroller ${className}`} onClick={this.scroll}>
				<i className="fa fa-chevron-down first" />
				<i className="fa fa-chevron-down second" />
				<i className="fa fa-chevron-down third" />
			</div>
		);
	}
}

Scroller.defaultProps = {
	className: ''
};