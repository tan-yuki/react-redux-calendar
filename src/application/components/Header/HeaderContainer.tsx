import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveToNextMonth, moveToPrevtMonth } from "../../actions";
import { RootState } from "../../reducers";
import { Header } from "./Header";

export function HeaderContainer() {
  const calendarMonth = useSelector(
    (store: RootState) => store.calendar.currentMonth
  );
  const dispatch = useDispatch();
  const onClickNextMonth = () => {
    dispatch(moveToNextMonth());
  };
  const onClickPrevMonth = () => {
    dispatch(moveToPrevtMonth());
  };

  return (
    <Header
      calendarMonth={calendarMonth}
      onClickNextMonth={onClickNextMonth}
      onClickPrevMonth={onClickPrevMonth}
    />
  );
}
