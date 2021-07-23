import React from 'react';
import {Dispatch} from 'redux';
import Users from "./UsersC";
import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../Redax/users-reducer";
import {AppStateType} from "../../Redax/redux-store";

type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default MyPostsContainer;

