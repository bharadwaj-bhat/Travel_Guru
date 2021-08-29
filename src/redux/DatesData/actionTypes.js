import {
  ADULTS,
  CHECK_IN_DATE,
  CHECK_OUT_DATE,
  ROOMS,
  CHILDREN,
  PRICE,
  TOTAL_PRICE,
  ID_STATE,
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

export const addPrice = (payload) => {
  return {
    type: PRICE,
    payload,
  };
};
export const idState = (payload) => {
  return {
    type: ID_STATE,
    payload,
  };
};

export const totalPrice=(payload) =>{

 return {
 type:TOTAL_PRICE,
 payload,

 };

};