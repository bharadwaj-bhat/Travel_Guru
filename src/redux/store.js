import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/reducers.js";
import thunk from "redux-thunk";
import { InnerRoomReducer } from "./RoomInner/reducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  room: InnerRoomReducer,
});
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
