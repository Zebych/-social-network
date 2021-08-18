import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import React from "react";
import usersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store=store;
export default store;



