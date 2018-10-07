import React from 'react';
import Dish from './Dish';

const Category = ({category, dishes}) => (
	<>
	<tr>
		<th colSpan="3" className="menu-category-name-cell"><span>{category.name}</span></th>
	</tr>
	{dishes.map(dish => (
		<Dish
			key={dish._id}
			name={dish.name}
			amount={dish.amount}
			price={dish.price}
		/>
	))}
	</>
);

export default Category;