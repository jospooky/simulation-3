const initalState = {
	username: '',
	id: '',
	profile_pic: ''
}

const UPDATE_USER_INFO = 'CHANGE_USER_INFO';

export default function reducer(state = initalState, action) {
	switch (action.type) {
		case UPDATE_USER_INFO:
			return Object.assign({}, state, action.payload)

		default:
			return state;
	}
}

export function updateUserInfo(userInfo) {
	return {
		type: UPDATE_USER_INFO,
		payload: userInfo
	}
}