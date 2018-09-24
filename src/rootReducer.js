import {combineReducers} from 'redux';
import langSelectorReducer from '_features/lang-selector/langSelectorReducer';
import userReducer from '_features/user/userReducer';

export default combineReducers({
	language: langSelectorReducer,
	user: userReducer
});