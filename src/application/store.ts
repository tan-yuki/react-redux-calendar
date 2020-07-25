import { createStore } from "redux";
import { rootReducers } from "./reducers";

export const createApplicationStore = () => createStore(rootReducers);
