import { createReducer } from "@reduxjs/toolkit";
import { CalendarMonth } from "../../domain/Calendar/CalendarMonth";
import { moveToNextMonthAction, moveToPrevtMonthAction } from "../actions";

interface CalendarState {
  currentMonth: CalendarMonth;
}

const initialState: CalendarState = {
  currentMonth: CalendarMonth.now(),
};

export const calendarReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(moveToNextMonthAction, (draft, action) => {
      const { currentMonth } = draft;
      draft.currentMonth = currentMonth.nextMonth();
    })
    .addCase(moveToPrevtMonthAction, (draft, action) => {
      const { currentMonth } = draft;
      draft.currentMonth = currentMonth.prevMonth();
    })
);
