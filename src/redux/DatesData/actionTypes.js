import {
  ADULTS,
  CHECK_IN_DATE,
  CHECK_OUT_DATE,
  ROOMS,
  CHILDREN,
  PRICE,
} from "./actions";

export const checkInDate = (payload) => {
  console.log("from inside dispatch", payload);
  return {
    type: CHECK_IN_DATE,
    payload,
  };
};

export const checkOutDate = (payload) => {
  return {
    type: CHECK_OUT_DATE,
    payload,
  };
};

export const rooms = (payload) => {
  return {
    type: ROOMS,
    payload,
  };
};

export const adults = (payload) => {
  return {
    type: ADULTS,
    payload,
  };
};

export const children = (payload) => {
  return {
    type: CHILDREN,
    payload,
  };
};

export const price = (payload) => {
  return {
    type: PRICE,
    payload,
  };
};
