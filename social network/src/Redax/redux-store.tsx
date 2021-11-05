import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    addPostAC,
    savePhotoSuccess,
    saveProfileSuccess,
    setStatus,
    setUsersProfile
} from "./profile-reducer";
import dialogsPageReducer, {AddMessageAC} from "./dialogsPage-reducer";
import React from "react";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form:formReducer,
    app:appReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type Types =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof saveProfileSuccess>
// @ts-ignore
window.store = store;
export default store;



