import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import { CalendarDate } from "../../../../domain/Calendar/CalendarDate";
import { useDispatch } from "react-redux";
import {
  closeCalendarDateEditModalAction,
  saveCalendarDateAction,
} from "../../../actions";
import { ScheduledCalendarDate } from "../../../../domain/Calendar/ScheduledCalendarDate";
import { Schedule } from "../../../../domain/Schedule/Schedule";

export interface CalendarDateEditModalProps {
  show: boolean;
  calendarDate: CalendarDate | null;
}

export function CalendarDateEditModal(props: CalendarDateEditModalProps) {
  const { show, calendarDate } = props;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onClose = useCallback(() => {
    dispatch(closeCalendarDateEditModalAction());
  }, [dispatch]);

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );

  const onChangeText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
    },
    [setText]
  );

  const onSubmit = useCallback(() => {
    if (calendarDate === null) {
      throw new Error("日付が確定していない状態で予定が保存されようとしました");
    }
    const scheduledCalendarDate = ScheduledCalendarDate.create(
      calendarDate,
      Schedule.create(title, text)
    );
    dispatch(saveCalendarDateAction({ scheduledCalendarDate }));
  }, [dispatch, title, text, calendarDate]);

  return (
    <Modal isOpen={show} onRequestClose={onClose} contentLabel="Modal">
      <div>Edit date: {calendarDate && calendarDate.toString()}</div>
      <div>
        <input type="text" value={title} onChange={onChangeTitle} />
      </div>
      <div>
        <textarea onChange={onChangeText}>{text}</textarea>
      </div>
      <button onClick={onSubmit}>保存</button>
    </Modal>
  );
}
