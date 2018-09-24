import {USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_RESTORE_SUCCESS} from './userConstants';

const defaultState = null;

export default function(state = defaultState, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
		case USER_RESTORE_SUCCESS:
			return action.data.user;
		case USER_LOGOUT_SUCCESS:
			return null;
		default:
			return state;
	}
}