import {
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
	const { username, password } = payload;
	axios
		.post("https://masai-api-mocker.herokuapp.com/auth/login", {
			username: username,
			password: password,
		})
		.then((res) => {
			console.log(res.data);
			dispatch(loginSuccess(res.data));
		})
		.catch((err) => {
			dispatch(loginFailure(err.message));
			alert(err.message);
		});
};
export const registerUser = (payload) => (dispatch) => {
	dispatch(registerRequest());
	const { username, password, description, name, email, mobile } = payload;
	axios
		.post("https://masai-api-mocker.herokuapp.com/auth/register", {
			username: username,
			password: password,
			description: description,
			name: name,
			email: email,
			mobile: mobile,
		})
		.then((res) => {
			console.log(res.data);
			if (res.data.error) {
				dispatch(registerFailure(res.data.message));
				alert(res.data.message);
			} else {
				dispatch(registerSuccess());
				alert(res.data.message);
			}
		});
};
