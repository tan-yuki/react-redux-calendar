import React from "react";
import { CurrentMonth } from "./CurrentMonth";
import { CalendarMonth } from "../../../domain/Calendar/CalendarMonth";

interface HeaderProps {
  calendarMonth: CalendarMonth;
  onClickNextMonth: () => void;
  onClickPrevMonth: () => void;
}

export function Header(props: HeaderProps) {
  const { calendarMonth, onClickNextMonth, onClickPrevMonth } = props;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        textAlign: "center",
      }}
    >
      <p onClick={onClickPrevMonth}>&lt;</p>
      <CurrentMonth calendarMonth={calendarMonth} />
      <p onClick={onClickNextMonth}>&gt;</p>
    </div>
  );
}
