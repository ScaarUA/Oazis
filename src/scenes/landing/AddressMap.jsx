import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const restaurantCoords = {
	lat: 50.494459,
	lng: 30.522827
};

const AddressMap = withScriptjs(withGoogleMap((props) => (
	<GoogleMap
		defaultZoom={17}
		defaultCenter={restaurantCoords}
	>
		<Marker position={restaurantCoords} />
	</GoogleMap>
)));

export default AddressMap;