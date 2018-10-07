import React from 'react';
import {Link} from 'react-router-dom';
import './back-link.less';

const BackLink = ({to, children}) => (
	<Link to={to} className="back-link">
		<i className="fa fa-arrow-alt-circle-left" /> {children}
	</Link>
);

export default BackLink;