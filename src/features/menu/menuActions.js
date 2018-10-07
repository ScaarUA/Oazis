import {
	MENU_CATEGORIES_FETCH_SUCCESS,
	MENU_CATEGORIES_ADD_SUCCESS,
	MENU_CATEGORIES_DELETE_SUCCESS,
	MENU_CATEGORIES_UPDATE_SUCCESS,
	MENU_CATEGORY_DISHES_FETCH_SUCCESS,
	MENU_CATEGORY_DISHES_ADD_SUCCESS,
	MENU_CATEGORY_DISHES_DELETE_SUCCESS,
	MENU_CATEGORY_DISHES_UPDATE_SUCCESS
} from './menuConstants';
import {getAllCategories, addCategory, deleteCategory, updateCategory} from '_gates/categoriesGate';
import {getAllDishesForCategory, addDish, deleteDish, updateDish} from '_gates/dishesGate';

const fetchMenuCategoriesSuccess = categories => ({
	type: MENU_CATEGORIES_FETCH_SUCCESS,
	data: {
		categories
	}
});

const addMenuCategorySuccess = category => ({
	type: MENU_CATEGORIES_ADD_SUCCESS,
	data: {
		category
	}
});

const deleteMenuCategorySuccess = id => ({
	type: MENU_CATEGORIES_DELETE_SUCCESS,
	data: {
		id
	}
});

const updateMenuCategorySuccess = category => ({
	type: MENU_CATEGORIES_UPDATE_SUCCESS,
	data: {
		category
	}
});

const fetchMenuCategoryDishesSuccess = (categoryId, dishes) => ({
	type: MENU_CATEGORY_DISHES_FETCH_SUCCESS,
	data: {
		categoryId,
		dishes
	}
});

const addMenuDishSuccess = (categoryId, dish) => ({
	type: MENU_CATEGORY_DISHES_ADD_SUCCESS,
	data: {
		dish,
		categoryId
	}
});

const deleteMenuDishSuccess = (categoryId, dishId) => ({
	type: MENU_CATEGORY_DISHES_DELETE_SUCCESS,
	data: {
		categoryId,
		dishId
	}
});

const updateMenuDishSuccess = (categoryId, dish) => ({
	type: MENU_CATEGORY_DISHES_UPDATE_SUCCESS,
	data: {
		categoryId,
		dish
	}
});

export const fetchMenuCategories = () => dispatch => {
	return getAllCategories()
		.then(categories => {
			dispatch(fetchMenuCategoriesSuccess(categories));
			categories.forEach(category => dispatch(fetchMenuCategoryDishes(category._id)));
		});
};

export const addMenuCategory = categoryData => dispatch => {
	return addCategory(categoryData)
		.then(category => dispatch(addMenuCategorySuccess(category)));
};

export const deleteMenuCategory = id => dispatch => {
	return deleteCategory(id)
		.then(() => dispatch(deleteMenuCategorySuccess(id)));
};

export const updateMenuCategory = category => dispatch => {
	return updateCategory(category)
		.then(() => dispatch(updateMenuCategorySuccess(category)));
};

export const fetchMenuCategoryDishes = categoryId => dispatch => {
	return getAllDishesForCategory(categoryId)
		.then(dishes => dispatch(fetchMenuCategoryDishesSuccess(categoryId, dishes)));
};

export const addMenuDish = (categoryId, dishData) => dispatch => {
	return addDish(categoryId, dishData)
		.then(dish => dispatch(addMenuDishSuccess(categoryId, dish)))
};

export const deleteMenuDish = dish => dispatch => {
	return deleteDish(dish.category, dish._id)
		.then(() => dispatch(deleteMenuDishSuccess(dish.category, dish._id)));
};

export const updateMenuDish = dish => dispatch => {
	return updateDish(dish.category, dish)
		.then(() => dispatch(updateMenuDishSuccess(dish.category, dish)));
};