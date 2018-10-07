import axios from 'axios';

const basePath = categoryId => `/api/menu/categories/${categoryId}/dishes`;

export function getAllDishesForCategory(categoryId) {
	return axios.get(basePath(categoryId))
		.then(response => response.data);
}

export function addDish(categoryId, dishData) {
	return axios.post(basePath(categoryId), dishData)
		.then(response => response.data);
}

export function deleteDish(categoryId, dishId) {
	return axios.delete(`${basePath(categoryId)}/${dishId}`);
}

export function updateDish(categoryId, dish) {
	return axios.put(`${basePath(categoryId)}/${dish._id}`, dish);
}