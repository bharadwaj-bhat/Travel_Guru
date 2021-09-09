import axios from "axios";
import {
	DATA_REQUEST,
	DATA_REQUEST_FAILED,
	DATA_REQUEST_SUCCESS,
} from "./actionTypes";

const dataRequest = () => {
	return {
		type: DATA_REQUEST,
	};
};

const dataRequestSuccess = (payload) => {
	return {
		type: DATA_REQUEST_SUCCESS,
		payload,
	};
};

const dataRequestFailed = (payload) => {
	console.log(payload);
	return {
		type: DATA_REQUEST_FAILED,
	};
};

export const getData = (payload) => (dispatch) => {
	dispatch(dataRequest());

	axios
		.get(`https://create-him-app.herokuapp.com/data/${payload}`)
		.then(({ data }) => dispatch(dataRequestSuccess(data)))
		.catch((err) => dispatch(dataRequestFailed(err)));
};
