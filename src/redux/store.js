import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/reducers.js";
import thunk from "redux-thunk";
import { InnerRoomReducer } from "./RoomInner/reducer.js";
import { hotelDataReducer } from "./hotelData/reducers.js";

const rootReducer = combineReducers({
	auth: authReducer,
	room: InnerRoomReducer,
	hotel: hotelDataReducer,
});
export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
