import React from 'react';
import {Dispatch} from 'redux';
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../Redax/users-reducer";
import {AppStateType} from "../../Redax/redux-store";

export type MapStatePropsType = {
    usersPage: InitialStateType,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage:(currentPage:number)=>void,
    setTotalUsersCount:(totalCount:number)=>void,
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    debugger
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage,
        totalUsersCount: state.usersPage,
        currentPage: state.usersPage,

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
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default MyPostsContainer;

