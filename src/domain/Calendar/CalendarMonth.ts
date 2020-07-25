import { Year } from "../Date/Year";
import { Month } from "../Date/Month";
import {
  addMonths,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  getDaysInMonth,
  addDays,
  differenceInDays,
} from "date-fns";
import { CalendarDate } from "./CalendarDate";

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

export class CalendarMonth {
  private constructor(private year: Year, private month: Month) {}

  private toJSBuiltInDate(): Date {
    // 日付は1日して返す return new Date(
    return new Date(this.year.toNumber(), this.month.toNumber() - 1, 1);
  }

  static createFromJSBuiltInDate(date: Date): CalendarMonth {
    return new CalendarMonth(
      Year.fromNumber(date.getFullYear()),
      Month.fromNumber(date.getMonth() + 1)
    );
  }

  static now(): CalendarMonth {
    return this.createFromJSBuiltInDate(new Date());
  }

  toString(): string {
    return `${this.year.toNumber()}/${this.month.toNumber()}`;
  }

  nextMonth(): CalendarMonth {
    const date = this.toJSBuiltInDate();
    const nextMonth = addMonths(date, 1);

    return CalendarMonth.createFromJSBuiltInDate(nextMonth);
  }

  prevMonth(): CalendarMonth {
    const date = this.toJSBuiltInDate();
    const nextMonth = addMonths(date, -1);

    return CalendarMonth.createFromJSBuiltInDate(nextMonth);
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
  calcCalendarDateList(): [
    OtherMonthCalendarDate[],
    CurrentMonthCalendarDate[],
    OtherMonthCalendarDate[]
  ] {
    const firstMonthDate = this.toJSBuiltInDate();
    const endMonthDate = endOfMonth(firstMonthDate);

    const firstCalendarDate = startOfWeek(firstMonthDate);
    const endCalendarDate = endOfWeek(endMonthDate);

    const currentMonthDates = [...Array(getDaysInMonth(firstMonthDate))].map(
      (_, i) => {
        return CalendarDate.createFromJSBuiltInDate(
          addDays(firstMonthDate, i)
        ) as CurrentMonthCalendarDate;
      }
    );

    const previousMonthDates = [
      ...Array(differenceInDays(firstMonthDate, firstCalendarDate)),
    ].map((_, i) => {
      return CalendarDate.createFromJSBuiltInDate(
        addDays(firstCalendarDate, i)
      ) as OtherMonthCalendarDate;
    });

    const followingMonthDates = [
      ...Array(differenceInDays(endCalendarDate, endMonthDate)),
    ].map((_, i) => {
      return CalendarDate.createFromJSBuiltInDate(
        addDays(endMonthDate, i + 1)
      ) as OtherMonthCalendarDate;
    });

    return [previousMonthDates, currentMonthDates, followingMonthDates];
  }
}
