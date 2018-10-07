import {SETTINGS_FETCH_SUCCESS, SETTINGS_UPDATE_SUCCESS} from './settingsConstants';

const defaultState = {
	showMenu: false
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case SETTINGS_UPDATE_SUCCESS:
		case SETTINGS_FETCH_SUCCESS:
			return action.data.settings;
		default:
			return state;
	}
}