import { UPDATE_FAILURE, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionTypes";
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

export const updateData = (payload) => (dispatch) => {
	dispatch(updateRequest());
	const data = scanData(payload);
	console.log(data);
	dispatch(updateSuccess(data));
	console.log(data);
};
