import React from 'react';
import DishEditor from './DishEditor';
import CategoryEditor from './CategoryEditor';
import AddDish from './AddDish';

class CategoryAdmin extends React.Component {
	render() {
		const {
			category,
			dishes,
			translations,
			deleteMenuCategory,
			updateMenuCategory,
			addMenuDish,
			deleteMenuDish,
			updateMenuDish
		} = this.props;

		return (
			<>
			<CategoryEditor
				category={category}
				onDelete={deleteMenuCategory}
				onSave={updateMenuCategory}
			/>
			{dishes.map(dish => (
				<DishEditor
					key={dish._id}
					dish={dish}
					onSave={updateMenuDish}
					onDelete={deleteMenuDish}
					translations={translations}
				/>
			))}
			<AddDish
				translations={translations}
				addMenuDish={addMenuDish}
				categoryId={category._id}
			/>
			</>
		);
	}
}

export default CategoryAdmin;