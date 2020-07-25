import React from "react";
import { CalendarContainer } from "./Calendar/CalendarContainer";
import { HeaderContainer } from "./Header/HeaderContainer";
import { now } from "../domain/Calendar/CalendarDate";

export function App() {
  const calendarDate = now();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <HeaderContainer calendarDate={calendarDate} />
      <CalendarContainer calendarDate={calendarDate} />
    </div>
  );
}
