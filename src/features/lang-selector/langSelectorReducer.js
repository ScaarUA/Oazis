import {LANGUAGE_CHANGE, LANGUAGE_RESTORE} from './langSelectorConstants';
import {langOptions} from './langSelectorConstants';

const defaultState = langOptions[0].value;

export default function(state = defaultState, action) {
	switch (action.type) {
		case LANGUAGE_RESTORE:
		case LANGUAGE_CHANGE:
			return action.payload.language;
		default:
			return state;
	}
}