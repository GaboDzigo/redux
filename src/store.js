import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlicer";
import customerReducer from "./features/customers/costumerSlicer";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(accountReducer);

export default store;
