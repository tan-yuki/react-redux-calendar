import { Year } from "../Date/Year";
import { Month } from "../Date/Month";
import { Date as DomainDate } from "../Date/Date";

export class CalendarDate {
  private constructor(
    private year: Year,
    private month: Month,
    private date: DomainDate
  ) {}

  getUniqueKey(): string {
    return this.toString();
  }

  toString(): string {
    return `${this.year.toNumber()}/${this.month.toNumber()}/${this.date.toNumber()}`;
  }

  getCalendarCellLabel(): string {
    return `${this.date.toNumber()}`;
  }

  static createFromJSBuiltInDate(date: Date): CalendarDate {
    return new CalendarDate(
      Year.fromNumber(date.getFullYear()),
      Month.fromNumber(date.getMonth() + 1),
      DomainDate.fromNumber(date.getDate())
    );
  }
}
