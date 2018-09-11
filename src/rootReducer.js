import {combineReducers} from 'redux';
import langSelectorReducer from '_features/lang-selector/langSelectorReducer';

export default combineReducers({
	language: langSelectorReducer
});