import React from "react";
import { CurrentMonth } from "./CurrentMonth";

export function Header() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        textAlign: "center",
      }}
    >
      <p>&lt;</p>
      <CurrentMonth />
      <p>&gt;</p>
    </div>
  );
}
