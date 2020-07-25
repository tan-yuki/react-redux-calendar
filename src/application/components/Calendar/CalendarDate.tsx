import React from "react";
import { Date } from "../../../domain/Date/Date";

export interface CalendarDateProps {
  date: Date;
  isCurrentMonth: boolean;
}

export function CalendarDate(props: CalendarDateProps) {
  const { date, isCurrentMonth } = props;

  return (
    <div
      style={{
        height: "10vw",
        color: isCurrentMonth ? "black" : "gray",
      }}
    >
      {date}
    </div>
  );
}
