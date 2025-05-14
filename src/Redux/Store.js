import { applyMiddleware, createStore } from "redux";
// import languageReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./Reducers/combineReducers";
import { thunk } from "redux-thunk";





const myStore = createStore(combineReducers,  composeWithDevTools(applyMiddleware(thunk)));

export default myStore;

//  Redux --> thunk, saga 