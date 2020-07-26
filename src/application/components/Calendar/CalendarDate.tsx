import React, { useCallback } from "react";
import { CalendarDate as CalendarDateDomain } from "../../../domain/Calendar/CalendarDate";
import { useDispatch } from "react-redux";
import { openCalendarDateEditModalAction } from "../../actions";

export interface CalendarDateProps {
  calendarDate: CalendarDateDomain;
  isCurrentMonth: boolean;
}

export function CalendarDate(props: CalendarDateProps) {
  const dispatch = useDispatch();
  const { calendarDate, isCurrentMonth } = props;

  const openCalendarDateEditModal = useCallback(() => {
    dispatch(openCalendarDateEditModalAction({ calendarDate }));
  }, [calendarDate, dispatch]);

  return (
    <div
      style={{
        height: "10vw",
        color: isCurrentMonth ? "black" : "gray",
      }}
      onClick={openCalendarDateEditModal}
    >
      {calendarDate.getCalendarCellLabel()}
    </div>
  );
}
