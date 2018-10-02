const mockFunc = () => {};

global.window = {
	scroll: mockFunc,
	localStorage: {
		setItem: mockFunc,
		getItem: mockFunc
	}
};
global.document = {
	documentElement: {},
	addEventListener: mockFunc
};

import React from 'react';
import {renderToString} from 'react-dom/server';
import Root from './Root';

export default (options) => renderToString(<Root options={options} />);