import { combineReducers } from "redux";

import Wally_Main_Reducer from "./Wally_Main_Reducer";
export default combineReducers({
  Wally: Wally_Main_Reducer
});
