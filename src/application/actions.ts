import { createAction, PrepareAction } from "@reduxjs/toolkit";
import { CalendarDate } from "../domain/Calendar/CalendarDate";
import { ScheduledCalendarDate } from "../domain/Calendar/ScheduledCalendarDate";

export const moveToNextMonthAction = createAction("moveToNextMonth");
export const moveToPrevtMonthAction = createAction("moveToPrevMonth");

// EditDate Modal Action
export interface OpenCalendatDateEditModalPayload {
  calendarDate: CalendarDate;
}
export const openCalendarDateEditModalAction = createAction<
  PrepareAction<OpenCalendatDateEditModalPayload>
>("modal/calendarDateEdit/open", ({ calendarDate }) => {
  return {
    payload: {
      calendarDate,
    },
  };
});
export interface SaveCalendarDatePayload {
  scheduledCalendarDate: ScheduledCalendarDate;
}
export const saveCalendarDateAction = createAction<
  PrepareAction<SaveCalendarDatePayload>
>("modal/calendarDateEdit/save", ({ scheduledCalendarDate }) => {
  return {
    payload: {
      scheduledCalendarDate,
    },
  };
});

export const closeCalendarDateEditModalAction = createAction(
  "modal/calendarDateEdit/close"
);
