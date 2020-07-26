import { combineReducers } from "redux";
import { calendarReducer } from "./reducers/calendarReducer";
import { modalReducers } from "./reducers/modals/modalReducers";

export const rootReducers = combineReducers({
  calendar: calendarReducer,
  modals: modalReducers,
});

export type RootState = ReturnType<typeof rootReducers>;
