import React from "react";

const DateLengthOnWeek = 7;

const WeekOnMonthArray = [...Array(5)];
const DateOnWeeksArray = [...Array(DateLengthOnWeek)];

export function Calendar() {
  const dateCells = WeekOnMonthArray.map((_, i) => {
    return DateOnWeeksArray.map((_, j) => (
      <div
        style={{
          height: "10vw",
        }}
      >
        {i * DateLengthOnWeek + j + 1}
      </div>
    ));
  });
  return (
    <div
      style={{
        padding: "0 10vw",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: [...Array(DateLengthOnWeek)]
            .map(() => "1fr")
            .join(" "),
        }}
      >
        <div>日</div>
        <div>月</div>
        <div>火</div>
        <div>水</div>
        <div>木</div>
        <div>金</div>
        <div>土</div>
        {dateCells}
      </div>
    </div>
  );
}
