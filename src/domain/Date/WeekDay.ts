const weekDayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export type WeekDay = typeof weekDayList[number];

// TODO: weekDayListから算出したい・・・。
export type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export function weekDay(n: WeekDayIndex): WeekDay {
  return weekDayList[n];
}

export const weekDaysLength = weekDayList.length;
