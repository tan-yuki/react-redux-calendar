import React from "react";
import { Calendar } from "./components/Calendar";
import { CalendarDate } from "../../domain/Calendar/CalendarDate";

interface CalendarCotainerPorps {
  calendarDate: CalendarDate;
}

export function CalendarContainer(props: CalendarCotainerPorps) {
  const { calendarDate } = props;
  return <Calendar calendarDate={calendarDate} />;
}
