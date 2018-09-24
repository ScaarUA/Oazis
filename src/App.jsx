import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './app.less';
import Landing from '_scenes/landing';
import Login from '_scenes/login';
import './styles/common.less';
import {restoreUser} from '_features/user/userActions';
import ErrorPage from '_scenes/ErrorPage';
import Menu from '_scenes/menu/index';

class App extends React.Component {
	componentDidMount() {
		this.props.restoreUser();
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/login" component={Login} />
					<Route path="/menu" component={Menu} />
					<Route component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapDispatchToProps = {
	restoreUser
};

export default connect(null, mapDispatchToProps)(App);