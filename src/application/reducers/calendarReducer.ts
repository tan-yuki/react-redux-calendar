import { createReducer } from "@reduxjs/toolkit";
import { CalendarMonth } from "../../domain/Calendar/CalendarMonth";
import { moveToNextMonth, moveToPrevtMonth } from "../actions";

interface CalendarState {
  currentMonth: CalendarMonth;
}

const initialState: CalendarState = {
  currentMonth: CalendarMonth.now(),
};

export const calendarReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(moveToNextMonth, (draft, action) => {
      const { currentMonth } = draft;
      draft.currentMonth = currentMonth.nextMonth();
    })
    .addCase(moveToPrevtMonth, (draft, action) => {
      const { currentMonth } = draft;
      draft.currentMonth = currentMonth.prevMonth();
    })
);
