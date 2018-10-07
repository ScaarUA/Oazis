import React from 'react';
import {connect} from 'react-redux';
import i18n from './menuI18n.json';
import './menu.less';
import Category from './Category';
import CategoryAdmin from './CategoryAdmin';
import {
	addMenuCategory,
	fetchMenuCategories,
	deleteMenuCategory,
	updateMenuCategory,
	addMenuDish,
	deleteMenuDish,
	updateMenuDish
} from './menuActions';
import {updateAppSettings} from '_features/settings/settingsActions';
import AddCategory from './AddCategory';
import Checkbox from '_components/checkbox';

class Menu extends React.Component {
	componentDidMount() {
		this.props.fetchMenuCategories();
	}

	toggleMenu = (isChecked) => {
		this.props.updateAppSettings({
			...this.props.settings,
			showMenu: isChecked
		});
	};

	render() {
		const {
			translations,
			categories,
			dishes,
			user,
			settings,
			addMenuCategory,
			deleteMenuCategory,
			updateMenuCategory,
			addMenuDish,
			deleteMenuDish,
			updateMenuDish
		} = this.props;
		const CategoryComponent = user ? CategoryAdmin : Category;
		const isAdmin = !!user;

		return (
			<div className="menu">
				<h1>{translations.menu}</h1>
				{isAdmin && (
					<div className="menu-toggle">
						<span>{translations.showMenu}</span>
						&nbsp;
						<Checkbox
							checked={settings.showMenu}
							onChange={this.toggleMenu}
						/>
					</div>
				)}
				<table className="menu-table">
					<thead>
					<tr>
						<th>{translations.dishName}</th>
						<th>{translations.dishAmount}</th>
						<th>{translations.dishPrice}</th>
					</tr>
					</thead>
					<tbody>
					{categories.map(category => (
						<CategoryComponent
							key={category._id}
							category={category}
							dishes={dishes[category._id] || []}
							isAdmin={isAdmin}
							translations={translations}
							deleteMenuCategory={deleteMenuCategory}
							updateMenuCategory={updateMenuCategory}
							addMenuDish={addMenuDish}
							deleteMenuDish={deleteMenuDish}
							updateMenuDish={updateMenuDish}
						/>
					))}
					{isAdmin && (
						<AddCategory
							translations={translations}
							addMenuCategory={addMenuCategory}
						/>
					)}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = ({language, user, menu, settings}) => ({
	translations: i18n[language],
	user,
	categories: menu.categories,
	dishes: menu.dishes,
	settings
});

const mapDispatchToProps = {
	fetchMenuCategories,
	addMenuCategory,
	deleteMenuCategory,
	updateMenuCategory,
	addMenuDish,
	deleteMenuDish,
	updateMenuDish,
	updateAppSettings
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);