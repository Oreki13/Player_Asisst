import { combineReducers } from "redux";
import Wowp from "./Wowp";
import Wot from "./Wot";
import Wows from "./Wows";

const rootReducer = combineReducers({
  Wowp,
  Wot,
  Wows
});

export default rootReducer;
