import { createReducer } from "@reduxjs/toolkit";
import {
  openCalendarDateEditModalAction,
  closeCalendarDateEditModalAction,
} from "../../actions";
import { CalendarDate } from "../../../domain/Calendar/CalendarDate";

interface CalendarDateEditModalState {
  show: boolean;
  calendarDate: CalendarDate | null;
}

const initialState: CalendarDateEditModalState = {
  show: false,
  calendarDate: null,
};

export const calendarDateEditModalReducer = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(openCalendarDateEditModalAction, (draft, action) => {
        draft.show = true;
        draft.calendarDate = action.payload.calendarDate;
      })
      .addCase(closeCalendarDateEditModalAction, (draft, action) => {
        draft.show = false;
      })
);
