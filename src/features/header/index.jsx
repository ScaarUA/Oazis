import React from 'react';
import './header.less';

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="header-block">
					<h1 className="header-title">Оазис Смачних Страв</h1>
				</div>
			</header>
		)
	}
}