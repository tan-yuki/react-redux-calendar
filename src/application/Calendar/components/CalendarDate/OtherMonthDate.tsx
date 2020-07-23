import React from "react";
import { getDate } from "date-fns";

export interface OtherMonthProps {
  date: Date;
}

export function OtherMonthDate(props: OtherMonthProps) {
  const { date } = props;

  return (
    <div
      style={{
        color: "gray",
        height: "10vw",
      }}
    >
      {getDate(date)}
    </div>
  );
}
