import axios from 'axios';

const basePath = '/api/menu/categories';

export function getAllCategories() {
	return axios.get(basePath)
		.then(response => response.data);
}

export function addCategory(categoryData) {
	return axios.post(basePath, categoryData)
		.then(response => response.data);
}

export function deleteCategory(id) {
	return axios.delete(`${basePath}/${id}`);
}

export function updateCategory(category) {
	return axios.put(`${basePath}/${category._id}`, category);
}