import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { CalendarDateEditModal } from "./CalendarDateEditModal";

export function CalendarDateEditModalContainer() {
  const show = useSelector(
    (store: RootState) => store.modals.calendarDateEdit.show
  );
  const calendarDate = useSelector(
    (store: RootState) => store.modals.calendarDateEdit.calendarDate
  );

  return <CalendarDateEditModal show={show} calendarDate={calendarDate} />;
}
