import {
	SORT_FAILURE,
	SORT_REQUEST,
	SORT_SUCCESS,
	UPDATE_FAILURE,
	UPDATE_MIN_REQUEST,
	UPDATE_REQUEST,
	UPDATE_SUCCESS,
} from "./actionTypes";
import { HotelData } from "../../fakeData/HotelData";

const initState = {
	data: HotelData,
	isLoading: false,
	isError: false,
	min: "1,760",
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
		case SORT_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case SORT_SUCCESS:
			return {
				...state,
				data: [...payload],
				isLoading: false,
			};

		case SORT_FAILURE:
			return {
				...state,
				data: [...HotelData],
				isError: false,
				isLoading: false,
			};
		case UPDATE_MIN_REQUEST:
			return {
				...state,
				min: payload,
			};
		default:
			return state;
	}
};
