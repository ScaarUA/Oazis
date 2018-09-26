import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './landing.less';
import {Scroller} from './Scroller';
import LangSelector from '_features/lang-selector';
import AddressMap from './AddressMap';
import Gallery from './Gallery';
import i18n from './landingI18n.json';
import {logoutUser} from '_features/user/userActions';

class Landing extends React.Component {
	render() {
		const {translations, user, logoutUser} = this.props;

		return (
			<>
			<Scroller />
			<section className="landing-section landing-primary-block">
				<header className="landing-header">
					<a className="phone-link" href="tel:+380503832570">
						+38 (050) 383-2570
						<i className="fas fa-utensils" />
					</a>
					{user && (
						<div className="landing-header-user">
							<span>{user.name} {user.surname}</span>
							<button className="landing-header-user-signout" onClick={logoutUser}>
								{translations.signoutLabel}
							</button>
						</div>
					)}
					<LangSelector />
				</header>
				<h1 className="primary-block-title">{translations.primaryTitle}</h1>
				<p className="address-info">{translations.primaryAddress}</p>
				<p className="main-description">{translations.primaryDescription}</p>
				{user && <Link to="/menu" className="landing-menu-button">
					{translations.openMenu}
					</Link>}
			</section>
			<section className="landing-section landing-secondary-block">
				<div className="landing-secondary-wrapper">
					<div className="landing-panel">
						<Gallery />
					</div>
				</div>
			</section>
			<footer className="landing-footer">
				<AddressMap
					googleMapURL="https://maps.googleapis.com/maps/api/js?&callback=initMap"
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '100%' }} />}
					mapElement={<div style={{ height: '100%' }} />}
				/>
			</footer>
			</>
		);
	}
}

const mapStateToProps = ({language, user}) => ({
	translations: i18n[language],
	user
});
const mapDispatchToProps = {
	logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);