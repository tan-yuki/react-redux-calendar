import React from "react";
import { CalendarDate as CalendarDateComponent } from "./CalendarDate";
import {
  CalendarDate,
  calcCalendarDateList,
  getCalendarDateKey,
} from "../../../domain/Calendar/CalendarDate";
import { weekDaysLength } from "../../../domain/Date/WeekDay";

export interface CalendarProps {
  calendarDate: CalendarDate;
}

export function Calendar(props: CalendarProps) {
  const { year, month } = props.calendarDate;
  const [prevDates, currentDates, followingDates] = calcCalendarDateList(
    year,
    month
  );
  const convertComponent = (isCurrentMonth: boolean) => (
    calendarDate: CalendarDate
  ) => {
    return (
      <CalendarDateComponent
        key={getCalendarDateKey(calendarDate)}
        date={calendarDate.date}
        isCurrentMonth={isCurrentMonth}
      />
    );
  };

  const previousMonthDates = prevDates.map(convertComponent(false));
  const currentMonthDates = currentDates.map(convertComponent(true));
  const followingMonthDates = followingDates.map(convertComponent(false));

  const dateCells = [
    ...previousMonthDates,
    ...currentMonthDates,
    ...followingMonthDates,
  ];

  return (
    <div
      style={{
        padding: "0 10vw",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: [...Array(weekDaysLength)]
            .map(() => "1fr")
            .join(" "),
        }}
      >
        <div>日</div>
        <div>月</div>
        <div>火</div>
        <div>水</div>
        <div>木</div>
        <div>金</div>
        <div>土</div>
        {dateCells}
      </div>
    </div>
  );
}
