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

const dataRequestFailed = () => {
  return {
    type: DATA_REQUEST_FAILED,
  };
};

export const getData = (payload) => (dispatch) => {
  console.log("trigered");
  dispatch(dataRequest());

  axios
    .get("http://localhost:3001/data")
    .then(({ data }) => dispatch(dataRequestSuccess(data)))
    .catch(() => dispatch(dataRequestFailed()));
};
