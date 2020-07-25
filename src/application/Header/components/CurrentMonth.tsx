import React from "react";
import {
  CalendarDate,
  getMonthLabel,
} from "../../../domain/Calendar/CalendarDate";

interface Props {
  calendarDate: CalendarDate;
}

export function CurrentMonth(props: Props) {
  const { calendarDate } = props;
  return <p>{getMonthLabel(calendarDate)}</p>;
}
