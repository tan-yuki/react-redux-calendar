import React from "react";
import { Header } from "./components/Header";
import { CalendarDate } from "../../domain/Calendar/CalendarDate";

interface HeaderCotainerPorps {
  calendarDate: CalendarDate;
}

export function HeaderContainer(props: HeaderCotainerPorps) {
  const { calendarDate } = props;
  return <Header calendarDate={calendarDate} />;
}
