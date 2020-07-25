import React from "react";
import {
  toString,
  CalendarMonth,
} from "../../../domain/Calendar/CalendarMonth";

interface Props {
  calendarMonth: CalendarMonth;
}

export function CurrentMonth(props: Props) {
  const { calendarMonth } = props;
  return <p>{toString(calendarMonth)}</p>;
}
