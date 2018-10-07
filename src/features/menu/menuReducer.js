import {combineReducers} from 'redux';
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

const defaultState = {
	dishes: {},
	categories: []
};

function categoriesReducer(state = defaultState.categories, action) {
	switch (action.type) {
		case MENU_CATEGORIES_FETCH_SUCCESS:
			return action.data.categories;
		case MENU_CATEGORIES_ADD_SUCCESS:
			return state.concat(action.data.category);
		case MENU_CATEGORIES_DELETE_SUCCESS:
			return state.filter(category => category._id !== action.data.id);
		case MENU_CATEGORIES_UPDATE_SUCCESS:
			const index = state.findIndex(category => category._id === action.data.category._id);
			const newCategories = state.concat();

			newCategories[index] = action.data.category;

			return newCategories;
		default:
			return state;
	}
}

function dishesReducer(state = defaultState.dishes, action) {
	switch (action.type) {
		case MENU_CATEGORY_DISHES_FETCH_SUCCESS:
			return {
				...state,
				[action.data.categoryId]: action.data.dishes
			};
		case MENU_CATEGORY_DISHES_ADD_SUCCESS:
			return {
				...state,
				[action.data.categoryId]: (state[action.data.categoryId] || []).concat(action.data.dish)
			};
		case MENU_CATEGORY_DISHES_DELETE_SUCCESS:
			return {
				...state,
				[action.data.categoryId]: (state[action.data.categoryId] || []).filter(dish => dish._id !== action.data.dishId)
			};
		case MENU_CATEGORY_DISHES_UPDATE_SUCCESS:
			const categoryDishes = state[action.data.categoryId];
			const index = categoryDishes.findIndex(dish => dish._id === action.data.dish._id);
			const newCategoryDishes = categoryDishes.concat();

			newCategoryDishes[index] = action.data.dish;

			return {
				...state,
				[action.data.categoryId]: newCategoryDishes
			};
		default:
			return state;
	}
}

export default combineReducers({
	dishes: dishesReducer,
	categories: categoriesReducer
});