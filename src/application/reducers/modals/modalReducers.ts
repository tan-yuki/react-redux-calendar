import { combineReducers } from "redux";
import { calendarDateEditModalReducer } from "./calendarDateEditModalReducer";

export const modalReducers = combineReducers({
  calendarDateEdit: calendarDateEditModalReducer,
});
