import {LANGUAGE_CHANGE} from './langSelectorConstants';
import {langOptions} from './langSelectorConstants';

const defaultLanguage = process.env.BROWSER && window.localStorage.getItem('LANGUAGE');
const defaultState = defaultLanguage || langOptions[0].value;

export default function(state = defaultState, action) {
	switch (action.type) {
		case LANGUAGE_CHANGE:
			return action.payload.language;
		default:
			return state;
	}
}