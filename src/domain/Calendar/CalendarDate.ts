import { Year, fromNumberToYear } from "../Date/Year";
import { Month, fromNumberToMonth } from "../Date/Month";
import { Date as DomainDate, fromNumberToDate } from "../Date/Date";

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

export function fromJSBuiltInDateToCalendarDate(date: Date): CalendarDate {
  return {
    year: fromNumberToYear(date.getFullYear()),
    month: fromNumberToMonth(date.getMonth() + 1),
    date: fromNumberToDate(date.getDate()),
  };
}
