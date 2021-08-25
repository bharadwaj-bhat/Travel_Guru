import {
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	REGISTER_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
} from "./actionTypes";
const initState = {
	isAuth: false,
	user: {},
	isError: false,
	isLoading: false,
};
export const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuth: true,
				user: payload,
				isLoading: false,
			};

		case LOGIN_FAILURE:
			return {
				...state,
				isAuth: false,
				user: {},
				isError: true,
				isLoading: false,
			};
		case REGISTER_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case REGISTER_FAILURE:
			return {
				...state,
				isError: true,
				isLoading: false,
			};

		default:
			return state;
	}
};
