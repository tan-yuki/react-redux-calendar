import React from "react";
import { Calendar } from "./Calendar";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux";

export function CalendarContainer() {
  const calendarMonth = useSelector(
    (store: RootState) => store.calendar.currentMonth
  );
  return <Calendar calendarMonth={calendarMonth} />;
}
