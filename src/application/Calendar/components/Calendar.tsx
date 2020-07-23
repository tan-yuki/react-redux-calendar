import React from "react";
import {
  endOfMonth,
  addDays,
  getDaysInMonth,
  startOfWeek,
  differenceInDays,
} from "date-fns";
import { endOfWeek } from "date-fns/esm";
import { OtherMonthDate } from "./CalendarDate/OtherMonthDate";
import { CurrentMonthDate } from "./CalendarDate/CurrentMonthDate";

const DateLengthOnWeek = 7;

export interface CalendarProps {
  year: number;
  month: number;
}

export function Calendar(props: CalendarProps) {
  const { year, month } = props;
  const firstMonthDate = new Date(year, month - 1, 1);
  const endMonthDate = endOfMonth(firstMonthDate);

  const firstCalendarDate = startOfWeek(firstMonthDate);
  const endCalendarDate = endOfWeek(endMonthDate);

  const currentMonthDates = [...Array(getDaysInMonth(firstMonthDate))].map(
    (_, i) => {
      return <CurrentMonthDate date={addDays(firstMonthDate, i)} />;
    }
  );

  const previousMonthDates = [
    ...Array(differenceInDays(firstMonthDate, firstCalendarDate)),
  ].map((_, i) => {
    return <OtherMonthDate date={addDays(firstCalendarDate, i)} />;
  });

  const followingMonthDates = [
    ...Array(differenceInDays(endCalendarDate, endMonthDate)),
  ].map((_, i) => {
    return <OtherMonthDate date={addDays(endMonthDate, i + 1)} />;
  });

  const dateCells = [
    ...previousMonthDates,
    currentMonthDates,
    followingMonthDates,
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
          gridTemplateColumns: [...Array(DateLengthOnWeek)]
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
