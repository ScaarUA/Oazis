import React from 'react';

const Dish = ({name, amount, price}) => (
	<tr>
		<td>{name}</td>
		<td className="menu-dish-cell">{amount}</td>
		<td className="menu-dish-cell">{price}</td>
	</tr>
);

export default Dish;