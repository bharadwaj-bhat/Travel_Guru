import {
	SORT_FAILURE,
	SORT_REQUEST,
	SORT_SUCCESS,
	UPDATE_FAILURE,
	UPDATE_MIN_REQUEST,
	UPDATE_REQUEST,
	UPDATE_SUCCESS,
} from "./actionTypes";
import { scanData } from "../../utils/scanData";

export const updateRequest = () => {
	return { type: UPDATE_REQUEST };
};
export const updateSuccess = (payload) => {
	return { type: UPDATE_SUCCESS, payload };
};
export const updateFailure = () => {
	return { type: UPDATE_FAILURE };
};

export const sortRequest = () => {
	return { type: SORT_REQUEST };
};
export const sortSuccess = (payload) => {
	return { type: SORT_SUCCESS, payload };
};
export const sortFailure = () => {
	return { type: SORT_FAILURE };
};
export const updateMin = (payload) => {
	return { type: UPDATE_MIN_REQUEST, payload };
};
export const updateData = (payload) => (dispatch) => {
	dispatch(updateRequest());
	const data = scanData(payload);
	dispatch(updateSuccess(data));
	const min = data.sort((a, b) => {
		return a.price - b.price;
	});
	if (min.length !== 0) {
		dispatch(updateMin(min[0].sPrice));
	} else {
		dispatch(updateMin("0"));
	}
};
export const sortData = (payload) => (dispatch) => {
	dispatch(sortRequest());
	dispatch(sortSuccess(payload));
};
