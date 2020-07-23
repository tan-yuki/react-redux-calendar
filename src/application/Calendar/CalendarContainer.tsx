import React from "react";
import { Calendar } from "./components/Calendar";
import { fromJSBuiltInDate } from "../../domain/Calendar/CalendarDate";

export function CalendarContainer() {
  return <Calendar calendarDate={fromJSBuiltInDate(new Date())} />;
}
