import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({taskItems: todoReducer});

export default rootReducer;