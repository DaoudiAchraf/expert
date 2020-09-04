import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import reservationReducer from "./reservation-reducer";

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  reservationReducer
});

export default rootReducer;
