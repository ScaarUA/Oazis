import axios from 'axios';

export function login(user) {
	return axios.post('/auth/login', user)
		.then(response => response.data);
}

export function logout() {
	return axios.get('/auth/logout');
}

export function restore() {
	return axios.get('/auth/restore')
		.then(response => response.data);
}