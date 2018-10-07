import axios from 'axios';

const basePath = '/api/settings';

export function getSettings() {
	return axios.get(basePath)
		.then(response => response.data);
}

export function updateSettings(settings) {
	return axios.put(basePath, settings);
}