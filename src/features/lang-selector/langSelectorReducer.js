import {LANGUAGE_CHANGE} from './langSelectorConstants';
import {langOptions} from './langSelectorConstants';

const defaultState = localStorage.getItem('LANGUAGE') || langOptions[0].value;

export default function(state = defaultState, action) {
	switch (action.type) {
		case LANGUAGE_CHANGE:
			return action.payload.language;
		default:
			return state;
	}
}