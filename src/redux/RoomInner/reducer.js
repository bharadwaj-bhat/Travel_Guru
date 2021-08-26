import {
  DATA_REQUEST,
  DATA_REQUEST_FAILED,
  DATA_REQUEST_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  data: ["test"],
};

export const InnerRoomReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_REQUEST_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case DATA_REQUEST_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: true,
      };

    default:
      return state;
  }
};
