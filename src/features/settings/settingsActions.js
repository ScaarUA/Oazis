import {SETTINGS_FETCH_SUCCESS, SETTINGS_UPDATE_SUCCESS} from './settingsConstants';
import {getSettings, updateSettings} from '_gates/settingsGate';

const fetchAppSettingsSuccess = settings => ({
	type: SETTINGS_FETCH_SUCCESS,
	data: {
		settings
	}
});

const updateAppSettingsSuccess = settings => ({
	type: SETTINGS_UPDATE_SUCCESS,
	data: {
		settings
	}
});

export const fetchAppSettings = () => dispatch => {
	return getSettings()
		.then(settings => dispatch(fetchAppSettingsSuccess(settings)));
};

export const updateAppSettings = settings => dispatch => {
	return updateSettings(settings)
		.then(() => dispatch(updateAppSettingsSuccess(settings)));
};