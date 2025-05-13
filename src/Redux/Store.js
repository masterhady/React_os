import { createStore } from "redux";
// import languageReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./Reducers/combineReducers";





const myStore = createStore(combineReducers,  composeWithDevTools());

export default myStore;