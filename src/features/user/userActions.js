import {USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_RESTORE_SUCCESS} from './userConstants';
import * as usersGate from '_gates/usersGate';

const loginUserSuccess = user => ({
	type: USER_LOGIN_SUCCESS,
	data: {
		user
	}
});
const restoreUserSuccess = user => ({
	type: USER_RESTORE_SUCCESS,
	data: {
		user
	}
});
const logoutUserSuccess = {
	type: USER_LOGOUT_SUCCESS
};

export const loginUser = user => dispatch => {
	return usersGate.login(user)
		.then(user => dispatch(loginUserSuccess(user)));
};

export const logoutUser = () => dispatch => {
	return usersGate.logout()
		.then(() => dispatch(logoutUserSuccess))
};

export const restoreUser = () => dispatch => {
	return usersGate.restore()
		.then(user => dispatch(restoreUserSuccess(user)))
		.catch(() => {});
};