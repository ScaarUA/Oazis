import React from 'react';

const Dish = ({name, description, amount, price}) => (
	<tr>
		<td>
			<span className="menu-dish-name">{name}</span>
			<br />
			<span className="menu-dish-description">{description}</span>
		</td>
		<td className="menu-dish-cell">{amount}</td>
		<td className="menu-dish-cell">{price}</td>
	</tr>
);

export default Dish;