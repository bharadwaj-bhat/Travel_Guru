import { UPDATE_FAILURE, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionTypes";
import { HotelData } from "../../fakeData/HotelData";

const initState = {
	data: HotelData,
	isLoading: false,
	isError: false,
};
export const hotelDataReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case UPDATE_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case UPDATE_SUCCESS:
			return {
				...state,
				data: [...payload],
				isLoading: false,
			};

		case UPDATE_FAILURE:
			return {
				...state,
				data: [...HotelData],
				isError: false,
				isLoading: false,
			};
		default:
			return state;
	}
};
