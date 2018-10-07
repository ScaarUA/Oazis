import React from 'react';
import {connect} from 'react-redux';
import './header.less';
import LangSelector from '_features/lang-selector';
import {logoutUser} from '_features/user/userActions';
import i18n from './headerI18n.json';

class Header extends React.Component {
	render() {
		const {className, translations, user, logoutUser} = this.props;

		return (
			<header className={`header ${className ? className : ''}`}>
				<a className="phone-link" href="tel:+380503832570">
					+38 (050) 383-2570
					<i className="fas fa-utensils" />
				</a>
				{user && (
					<div className="header-user">
						<span>{user.name} {user.surname}</span>
						<button className="header-user-signout" onClick={logoutUser}>
							{translations.signoutLabel}
						</button>
					</div>
				)}
				<LangSelector />
			</header>
		)
	}
}

const mapStateToProps = ({language, user}) => ({
	translations: i18n[language],
	user
});
const mapDispatchToProps = {
	logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);