import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const createApplicationStore = () =>
  configureStore({
    reducer: combineReducers({}),
    devTools: true,
    middleware: [],
  });
