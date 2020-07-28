import { Year } from "../Date/Year";
import { Month } from "../Date/Month";
import { Date as DomainDate } from "../Date/Date";
import { Schedule } from "../Schedule/Schedule";

export class CalendarDate {
  private constructor(
    private year: Year,
    private month: Month,
    private date: DomainDate,
    private schedule: Schedule
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
      DomainDate.fromNumber(date.getDate()),
      Schedule.createEmpty()
    );
  }

  withSchedule(schedule: Schedule) {
    return new CalendarDate(this.year, this.month, this.date, schedule);
  }
}
