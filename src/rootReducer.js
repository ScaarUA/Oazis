import {combineReducers} from 'redux';
import langSelectorReducer from '_features/lang-selector/langSelectorReducer';
import userReducer from '_features/user/userReducer';
import menuReducer from '_features/menu/menuReducer';
import settingsReducer from '_features/settings/settingsReducer';

export default combineReducers({
	language: langSelectorReducer,
	user: userReducer,
	menu: menuReducer,
	settings: settingsReducer
});