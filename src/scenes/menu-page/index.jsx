import React from 'react';
import BackLink from '_components/back-link';
import './menu-page.less';
import Header from '_features/header';
import Menu from '_features/menu';

class MenuPage extends React.Component {
	render() {
		return (
			<div className="menu-page">
				<Header className="menu-page-header" />
				<BackLink to="/">Повернутися на головну</BackLink>
				<div className="menu-page-container">
					<Menu />
				</div>
			</div>
		);
	}
}

export default MenuPage;