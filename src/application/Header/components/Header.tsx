import React from "react";
import { CurrentMonth } from "./CurrentMonth";
import { CalendarDate } from "../../../domain/Calendar/CalendarDate";

interface HeaderProps {
  calendarDate: CalendarDate;
}

export function Header(props: HeaderProps) {
  const { calendarDate } = props;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        textAlign: "center",
      }}
    >
      <p>&lt;</p>
      <CurrentMonth calendarDate={calendarDate} />
      <p>&gt;</p>
    </div>
  );
}
