import React from 'react';
import './checkbox.less';

export default class Checkbox extends React.Component {
	onChange = () => {
		this.props.onChange(!this.props.checked);
	};

	render() {
		const {checked} = this.props;
		const className = [
			'checkbox',
			checked ? 'checkbox-checked' : ''
		].join(' ');

		return (
			<div className={className} onClick={this.onChange}>
				<div className="checkbox-circle" />
			</div>
		);
	};
}