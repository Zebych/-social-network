import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, setStatus, setUsersProfile, updateNewPostTextAC} from "./profile-reducer";
import dialogsPageReducer, {AddMessageAC, UpdateNewMessageTextAC} from "./dialogsPage-reducer";
import React from "react";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type Types =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateNewMessageTextAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>
// @ts-ignore
window.store = store;
export default store;



