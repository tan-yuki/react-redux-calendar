import React from "react";
import { CalendarMonth } from "../../../domain/Calendar/CalendarMonth";

interface Props {
  calendarMonth: CalendarMonth;
}

export function CurrentMonth(props: Props) {
  const { calendarMonth } = props;
  return <p>{calendarMonth.toString()}</p>;
}
