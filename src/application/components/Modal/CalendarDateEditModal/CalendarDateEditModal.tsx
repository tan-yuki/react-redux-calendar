import React, { useCallback } from "react";
import Modal from "react-modal";
import { CalendarDate } from "../../../../domain/Calendar/CalendarDate";
import { useDispatch } from "react-redux";
import { closeCalendarDateEditModalAction } from "../../../actions";

export interface CalendarDateEditModalProps {
  show: boolean;
  calendarDate: CalendarDate | null;
}

export function CalendarDateEditModal(props: CalendarDateEditModalProps) {
  const { show, calendarDate } = props;
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(closeCalendarDateEditModalAction());
  }, [dispatch]);

  return (
    <Modal isOpen={show} onRequestClose={onClose} contentLabel="Modal">
      <div>Edit date: {calendarDate && calendarDate.toString()}</div>
    </Modal>
  );
}
