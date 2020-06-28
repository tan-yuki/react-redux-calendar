import React from 'react';
import { CalendarContainer } from './Calendar/CalendarContainer';
import { HeaderContainer } from './Header/HeaderContainer';

export function App() {
  return <div style={{
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
  }}>
    <HeaderContainer />
    <CalendarContainer />
  </div>;
}
