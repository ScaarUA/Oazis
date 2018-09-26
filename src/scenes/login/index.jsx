import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './login.less';
import {loginUser} from '_features/user/userActions';
import i18n from './loginI18n.json';

class Login extends React.Component {
	state = {
		user: {
			name: '',
			password: ''
		},
		error: null
	};

	login = () => {
		this.props.loginUser(this.state.user)
			.then(this.goToDashboard)
			.catch(({response}) => {
				if (response.status === 401) {
					this.setState({
						error: this.props.translations.wrongLogin
					})
				}
			});
	};

	goToDashboard = () => {
		this.props.history.push('/');
	};

	onNameChange = ({target}) => {
		this.setState({
			user: {
				...this.state.user,
				name: target.value
			}
		});
	};

	onPasswordChange = ({target}) => {
		this.setState({
			user: {
				...this.state.user,
				password: target.value
			}
		});
	};

	render() {
		const {translations} = this.props;
		const {user, error} = this.state;

		if (this.props.user) {
			return <h2>
				{translations.alreadyLoggedIn}. <Link to="/">{translations.goBack}</Link>
			</h2>
		}

		return (
			<div className="login">
				<h1>{translations.title}</h1>
				<div className="login-block">
					{error && <p className="login-error">{error}</p>}
					<label className="login-form-field">
						<p>{translations.loginLabel}</p>
						<input type="text" name="username" value={user.name} onChange={this.onNameChange} />
					</label>
					<label className="login-form-field">
						<p>{translations.passwordLabel}</p>
						<input type="password" name="password" value={user.password} onChange={this.onPasswordChange} />
					</label>
					<button onClick={this.login}>{translations.submitLabel}</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({user, language}) => ({
	translations: i18n[language],
	user
});
const mapDispatchToProps = {
	loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);