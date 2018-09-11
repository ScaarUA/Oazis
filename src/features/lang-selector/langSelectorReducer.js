import {LANGUAGE_CHANGE} from './langSelectorConstants';

const defaultState = localStorage.getItem('LANGUAGE');

export default function(state = defaultState, action) {
	switch (action.type) {
		case LANGUAGE_CHANGE:
			return action.payload.language;
		default:
			return state;
	}
}