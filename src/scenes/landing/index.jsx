import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './landing.less';
import {Scroller} from './Scroller';
import Header from '_features/header';
import AddressMap from './AddressMap';
import Gallery from './Gallery';
import i18n from './landingI18n.json';
import {logoutUser} from '_features/user/userActions';

class Landing extends React.Component {
	render() {
		const {translations, settings, user} = this.props;
		const isAdmin = !!user;

		return (
			<>
			<Scroller />
			<section className="landing-section landing-primary-block">
				<Header className="landing-header" />
				<h1 className="primary-block-title">{translations.primaryTitle}</h1>
				<p className="address-info">{translations.primaryAddress}</p>
				<p className="main-description">{translations.primaryDescription}</p>
				{settings.showMenu || isAdmin && <Link to="/menu" className="landing-menu-button">
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
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-M0f5BGwbRlOjFFv5tGY9foFupUoH14Y&callback=initMap"
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '100%' }} />}
					mapElement={<div style={{ height: '100%' }} />}
				/>
			</footer>
			</>
		);
	}
}

const mapStateToProps = ({language, user, settings}) => ({
	translations: i18n[language],
	settings,
	user
});
const mapDispatchToProps = {
	logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);