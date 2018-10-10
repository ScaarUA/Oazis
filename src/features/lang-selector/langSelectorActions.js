import {LANGUAGE_CHANGE, LANGUAGE_RESTORE} from './langSelectorConstants';

export const changeLanguage = language => {
	window.localStorage.setItem('LANGUAGE', language);

	return {
		type: LANGUAGE_CHANGE,
		payload: {
			language
		}
	};
};

export const restoreLanguage = () => dispatch => {
	const queryLanguage = window.location.search.replace(/.*language=(\w+).*/, '$1');
	const language = window.localStorage.getItem('LANGUAGE');

	if (queryLanguage || language) {
		dispatch({
			type: LANGUAGE_RESTORE,
			payload: {
				language: queryLanguage || language
			}
		})
	}
};