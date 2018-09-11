import React from 'react';
import './app.less';
import Header from '_features/header';
import Home from '_scenes/home';
import Landing from '_scenes/Landing';
import './styles/common.less';

export default class App extends React.Component {
	render() {
		return (
			<>
				<Landing />
			</>
		);
	}
}