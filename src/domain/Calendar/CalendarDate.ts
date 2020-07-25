import { Year, toYear } from "../Date/Year";
import { Month, toMonth } from "../Date/Month";
import { Date as DomainDate, toDate } from "../Date/Date";
import {
  endOfMonth,
  startOfWeek,
  endOfWeek,
  getDaysInMonth,
  addDays,
  differenceInDays,
} from "date-fns";

export interface CalendarDate {
  year: Year;
  month: Month;
  date: DomainDate;
}

/**
 * 日付によって一意になる文字列を取得する
 */
export function getCalendarDateKey(calendar: CalendarDate) {
  return `${calendar.year}/${calendar.month}/${calendar.date}`;
}

/**
 * 現在の月を表すための表示を取得する
 */
export function getMonthLabel(calendar: CalendarDate) {
  return `${calendar.year}/${calendar.month}`;
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

export function fromJSBuiltInDate(date: Date): CalendarDate {
  return {
    year: toYear(date.getFullYear()),
    month: toMonth(date.getMonth() + 1),
    date: toDate(date.getDate()),
  };
}

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
  year: Year,
  month: Month
): [
  OtherMonthCalendarDate[],
  CurrentMonthCalendarDate[],
  OtherMonthCalendarDate[]
] {
  const firstMonthDate = new Date(year, month - 1, 1);
  const endMonthDate = endOfMonth(firstMonthDate);

  const firstCalendarDate = startOfWeek(firstMonthDate);
  const endCalendarDate = endOfWeek(endMonthDate);

  const currentMonthDates = [...Array(getDaysInMonth(firstMonthDate))].map(
    (_, i) => {
      return fromJSBuiltInDate(
        addDays(firstMonthDate, i)
      ) as CurrentMonthCalendarDate;
    }
  );

  const previousMonthDates = [
    ...Array(differenceInDays(firstMonthDate, firstCalendarDate)),
  ].map((_, i) => {
    return fromJSBuiltInDate(
      addDays(firstCalendarDate, i)
    ) as OtherMonthCalendarDate;
  });

  const followingMonthDates = [
    ...Array(differenceInDays(endCalendarDate, endMonthDate)),
  ].map((_, i) => {
    return fromJSBuiltInDate(
      addDays(endMonthDate, i + 1)
    ) as OtherMonthCalendarDate;
  });

  return [previousMonthDates, currentMonthDates, followingMonthDates];
}
