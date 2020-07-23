import React from "react";
import { getDate } from "date-fns";

export interface CurrentMonthProps {
  date: Date;
}

export function CurrentMonthDate(props: CurrentMonthProps) {
  const { date } = props;

  return (
    <div
      style={{
        height: "10vw",
      }}
    >
      {getDate(date)}
    </div>
  );
}
