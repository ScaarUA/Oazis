import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.less';

const Dropdown = ({show, options, onChange, className}) => show ? (
	<div className={`dropdown ${className}`}>
		{options.map(option => (
			<div
				key={option.value}
				onClick={() => onChange(option.value)}
				className="dropdown-item"
			>
				{option.label}
			</div>
		))}
	</div>
) : null;

Dropdown.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	})).isRequired,
	show: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string
};
Dropdown.defaultProps = {
	className: ''
};

export default Dropdown;