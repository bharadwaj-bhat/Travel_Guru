import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducers.js";
import thunk from "redux-thunk";
import { InnerRoomReducer } from "./RoomInner/reducer.js";
import { hotelDataReducer } from "./hotelData/reducers.js";
import { DatesDataReducer } from "./DatesData/reducer.js";

const rootReducer = combineReducers({
	auth: authReducer,
	room: InnerRoomReducer,
	hotel: hotelDataReducer,
	date: DatesDataReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
