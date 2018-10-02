import React from 'react';
import {render, hydrate} from 'react-dom';
import Root from './Root';

const renderer = process.env.NODE_ENV === 'production' ? hydrate : render;

renderer(
	<Root />,
	document.getElementById('app-root')
);

module.hot.accept();