import { Schedule } from "../Schedule/Schedule";
import { CalendarDate } from "./CalendarDate";

export class ScheduledCalendarDate {
  private constructor(
    private calendarDate: CalendarDate,
    private schedule: Schedule
  ) {}

  static create(calendarDate: CalendarDate, schedule: Schedule) {
    return new ScheduledCalendarDate(calendarDate, schedule);
  }
}
