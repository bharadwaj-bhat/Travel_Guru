import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	REGISTER_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const loginRequest = () => {
	return { type: LOGIN_REQUEST };
};
export const loginSuccess = (user) => {
	return { type: LOGIN_SUCCESS, payload: user };
};
export const loginFailure = (err) => {
	return { type: LOGIN_FAILURE, payload: err };
};
export const getRequest = () => {
	return { type: GET_DATA_REQUEST };
};
export const getSuccess = (user) => {
	return { type: GET_DATA_SUCCESS, payload: user };
};
export const getFailure = (err) => {
	return { type: GET_DATA_FAILURE, payload: err };
};
export const registerRequest = () => {
	return { type: REGISTER_REQUEST };
};
export const registerSuccess = () => {
	return { type: REGISTER_SUCCESS };
};
export const registerFailure = (err) => {
	return { type: REGISTER_FAILURE, payload: err };
};
export const loginUser = (payload) => (dispatch) => {
	dispatch(loginRequest());
	dispatch(loginSuccess(payload));
};
export const logoutUser = (payload) => (dispatch) => {
	dispatch(loginRequest());
	dispatch(loginFailure());
};
export const getData = () => (dispatch) => {
	dispatch(getRequest());
	axios
		.get("https://create-him-app.herokuapp.com/users")
		.then((res) => {
			//g(res.data);
			dispatch(getSuccess(res.data));
		})
		.catch((err) => {
			dispatch(loginFailure(err.message));
			//alert(err.message);
		});
};
export const registerUser = (payload) => (dispatch) => {
	dispatch(registerRequest());
	axios
		.post("https://create-him-app.herokuapp.com/users", payload)
		.then((res) => {
			if (res.data.error) {
				dispatch(registerFailure(res.data.message));
				//alert(res.data.message);
			} else {
				dispatch(registerSuccess());
				//alert(res.data.message);
			}
		});
};
