import React from 'react';
import {connect} from 'react-redux';
import './landing.less';
import {Scroller} from './Scroller';
import LangSelector from '_features/lang-selector';
import AddressMap from './AddressMap';
import Gallery from './Gallery';
import i18n from './landingI18n.json';

const Landing = ({translations}) => (
	<>
	<Scroller />
	<section className="landing-section landing-primary-block">
		<header className="landing-header">
			<a className="phone-link" href="tel:+380503832570">
				+38 (050) 383-2570
				<i className="fas fa-utensils" />
			</a>
			<LangSelector />
		</header>
		<h1 className="primary-block-title">{translations.primaryTitle}</h1>
		<p className="address-info">{translations.primaryAddress}</p>
		<p className="main-description">{translations.primaryDescription}</p>
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
			googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBi1_XM-qKj-81uXgcvMOgq6eVRr9lLn3k&callback=initMap"
			loadingElement={<div style={{ height: '100%' }} />}
			containerElement={<div style={{ height: '100%' }} />}
			mapElement={<div style={{ height: '100%' }} />}
		/>
	</footer>
	</>
);

const mapStateToProps = ({language}) => ({
	translations: i18n[language]
});

export default connect(mapStateToProps)(Landing);