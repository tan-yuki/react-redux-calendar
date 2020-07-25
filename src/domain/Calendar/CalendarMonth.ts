import { Year, fromYearToNumber, fromNumberToYear } from "../Date/Year";
import { Month, fromMonthToNumber, fromNumberToMonth } from "../Date/Month";
import {
  addMonths,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  getDaysInMonth,
  addDays,
  differenceInDays,
} from "date-fns";
import { CalendarDate, fromJSBuiltInDateToCalendarDate } from "./CalendarDate";

export interface CalendarMonth {
  year: Year;
  month: Month;
}

function fromCalendarMonthToJSBuiltInDate(calendar: CalendarMonth): Date {
  // 日付は1日して返す return new Date(
  return new Date(
    fromYearToNumber(calendar.year),
    fromMonthToNumber(calendar.month) - 1,
    1
  );
}

function fromJSBuiltInDate(date: Date): CalendarMonth {
  return {
    year: fromNumberToYear(date.getFullYear()),
    month: fromNumberToMonth(date.getMonth() + 1),
  };
}

export function now(): CalendarMonth {
  return fromJSBuiltInDate(new Date());
}

export function toString(calendarMonth: CalendarMonth) {
  const { year, month } = calendarMonth;
  return `${year}/${month}`;
}

export function nextMonth(calendarMonth: CalendarMonth) {
  const date = fromCalendarMonthToJSBuiltInDate(calendarMonth);
  const nextMonth = addMonths(date, 1);

  return fromJSBuiltInDate(nextMonth);
}

export function prevMonth(calendarMonth: CalendarMonth) {
  const date = fromCalendarMonthToJSBuiltInDate(calendarMonth);
  const nextMonth = addMonths(date, -1);

  return fromJSBuiltInDate(nextMonth);
}

/**
 * 表示しているカレンダー月の日付
 */
type CurrentMonthCalendarDate = CalendarDate & {
  __currentMonthCalendarDate: never;
};

/**
 * 表示しているカレンダー月ではないの月の日付
 */
type OtherMonthCalendarDate = CalendarDate & {
  __otherMonthCalendarDate: never;
};

/**
 * 指定した月のカレンダーに表示するべき日付のリストを返却する。
 * 返却するリストは指定された月の日付のみではなく、その月の前後の日付も表示する必要があるものはすべて返却する。
 *
 * 例) 2020/07の場合
 *
 * ```
 * Su | Mo | Tu | We | Th | Fr | Sa
 * ---+----+----+----+----+----+---
 * 28 | 29 | 30 |  1 |  2 |  3 |  4
 *  5 |  6 |  7 |  8 |  9 | 10 | 11
 * 12 | 13 | 14 | 15 | 16 | 17 | 18
 * 19 | 20 | 21 | 22 | 23 | 24 | 25
 * 26 | 27 | 28 | 29 | 30 | 31 |  1
 * ```
 *
 * 上記の場合、2020/07/01が水曜日、2020/07/31が金曜日であるが、
 * カレンダーに表示するべき2020/06/30や2020/09/01の日付もこの関数で返す必要がある。
 */
export function calcCalendarDateList(
  calendarMonth: CalendarMonth
): [
  OtherMonthCalendarDate[],
  CurrentMonthCalendarDate[],
  OtherMonthCalendarDate[]
] {
  const firstMonthDate = fromCalendarMonthToJSBuiltInDate(calendarMonth);
  const endMonthDate = endOfMonth(firstMonthDate);

  const firstCalendarDate = startOfWeek(firstMonthDate);
  const endCalendarDate = endOfWeek(endMonthDate);

  const currentMonthDates = [...Array(getDaysInMonth(firstMonthDate))].map(
    (_, i) => {
      return fromJSBuiltInDateToCalendarDate(
        addDays(firstMonthDate, i)
      ) as CurrentMonthCalendarDate;
    }
  );

  const previousMonthDates = [
    ...Array(differenceInDays(firstMonthDate, firstCalendarDate)),
  ].map((_, i) => {
    return fromJSBuiltInDateToCalendarDate(
      addDays(firstCalendarDate, i)
    ) as OtherMonthCalendarDate;
  });

  const followingMonthDates = [
    ...Array(differenceInDays(endCalendarDate, endMonthDate)),
  ].map((_, i) => {
    return fromJSBuiltInDateToCalendarDate(
      addDays(endMonthDate, i + 1)
    ) as OtherMonthCalendarDate;
  });

  return [previousMonthDates, currentMonthDates, followingMonthDates];
}
