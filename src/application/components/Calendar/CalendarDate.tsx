import React from "react";
import { CalendarDate as CalendarDateDomain } from "../../../domain/Calendar/CalendarDate";

export interface CalendarDateProps {
  calendarDate: CalendarDateDomain;
  isCurrentMonth: boolean;
}

export function CalendarDate(props: CalendarDateProps) {
  const { calendarDate, isCurrentMonth } = props;

  return (
    <div
      style={{
        height: "10vw",
        color: isCurrentMonth ? "black" : "gray",
      }}
    >
      {calendarDate.getCalendarCellLabel()}
    </div>
  );
}
