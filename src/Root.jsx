import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

export default ({options}) => (
	<Provider store={store}>
		<App options={options} />
	</Provider>
);
