import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const Root = ({options}) => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		rootReducer,
		options.preloadedState || {},
		composeEnhancers(
			applyMiddleware(thunk)
		)
	);
	return (
		<Provider store={store}>
			<App options={options}/>
		</Provider>
	);
};

Root.defaultProps = {
	options: {}
};

export default Root;