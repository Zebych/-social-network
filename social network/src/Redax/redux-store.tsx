import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import {StoreType} from "./store";

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsPageReducer
})
let store:StoreType=createStore(reducers)

export default store;