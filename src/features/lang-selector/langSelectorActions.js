import {LANGUAGE_CHANGE} from './langSelectorConstants';

export const changeLanguage = language => {
	localStorage.setItem('LANGUAGE', language);

	return {
		type: LANGUAGE_CHANGE,
		payload: {
			language
		}
	};
};