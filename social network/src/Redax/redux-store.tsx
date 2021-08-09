import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import React from "react";
import usersReducer from "./users-reducer";
import AuthReducer, {setAuthUserData} from "./auth-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store=store;
export default store;



