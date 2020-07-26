import { createAction, PrepareAction } from "@reduxjs/toolkit";
import { CalendarDate } from "../domain/Calendar/CalendarDate";

export const moveToNextMonthAction = createAction("moveToNextMonth");
export const moveToPrevtMonthAction = createAction("moveToPrevMonth");

export interface OpenCalendatDateEditModalPayload {
  calendarDate: CalendarDate;
}

// EditDate Modal Action
export const openCalendarDateEditModalAction = createAction<
  PrepareAction<OpenCalendatDateEditModalPayload>
>("modal/calendarDateEdit/open", ({ calendarDate }) => {
  return {
    payload: {
      calendarDate,
    },
  };
});
export const closeCalendarDateEditModalAction = createAction(
  "modal/calendarDateEdit/close"
);
