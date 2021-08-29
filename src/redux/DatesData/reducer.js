import {
  ADULTS,
  CHECK_IN_DATE,
  CHECK_OUT_DATE,
  ROOMS,
  CHILDREN,
  PRICE,
} from "./actions";

const initState = {
  checkInDate: { day: 29, month: "08", year: 2021 },
  checkOutDate: { day: 30, month: "08", year: 2021 },
  adults: 1,
  children: 0,
  rooms: 1,
  price: 0,
};

export const DatesDataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CHECK_IN_DATE:
      return {
        ...state,
        checkInDate: payload,
      };
    case CHECK_OUT_DATE:
      return {
        ...state,
        checkOutDate: payload,
      };
    case ROOMS:
      return {
        ...state,
        rooms: payload,
      };
    case ADULTS:
      return {
        ...state,
        adults: state.adults + payload,
      };
    case CHILDREN:
      return {
        ...state,
        children: state.children + payload,
      };
    case PRICE:
      return {
        ...state,
        price: payload,
      };
    default:
      return state;
  }
};
