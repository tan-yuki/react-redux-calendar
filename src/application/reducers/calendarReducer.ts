import { createReducer } from "@reduxjs/toolkit";
import {
  CalendarMonth,
  now,
  nextMonth,
  prevMonth,
} from "../../domain/Calendar/CalendarMonth";
import { moveToNextMonth, moveToPrevtMonth } from "../actions";

interface CalendarState {
  currentMonth: CalendarMonth;
}

const initialState: CalendarState = {
  currentMonth: now(),
};

export const calendarReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(moveToNextMonth, (draft, action) => {
      const { currentMonth } = draft;
      draft.currentMonth = nextMonth(currentMonth);
    })
    .addCase(moveToPrevtMonth, (draft, action) => {
      const { currentMonth } = draft;
      draft.currentMonth = prevMonth(currentMonth);
    })
);
