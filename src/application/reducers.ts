import { combineReducers } from "redux";
import { calendarReducer } from "./reducers/calendarReducer";

export const rootReducers = combineReducers({
  calendar: calendarReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
