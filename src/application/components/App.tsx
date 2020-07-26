import React from "react";
import { CalendarContainer } from "./Calendar/CalendarContainer";
import { HeaderContainer } from "./Header/HeaderContainer";
import { Provider } from "react-redux";
import { createApplicationStore } from "../store";
import { CalendarDateEditModalContainer } from "./Modal/CalendarDateEditModal/CalendarDateEditModalContainer";

export function App() {
  const store = createApplicationStore();
  return (
    <Provider store={store}>
      <div
        style={{
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <HeaderContainer />
        <CalendarContainer />
      </div>
      <CalendarDateEditModalContainer />
    </Provider>
  );
}
