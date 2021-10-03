import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import Users from "./Users";
import {
    followSuccess, toggleFollowingProgress,
    setCurrentPage,
    unfollowSuccess,
    requestUsers, UserType,
} from "../../Redax/users-reducer";
import Preloader from "../commen/Preloader/Preloader";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redax/users-selectors";


export type MapStatePropsType = {
    users:Array<UserType>,
    currentPage:number,
    pageSize:number,
    isFetching:boolean,
    totalUsersCount:number,
    followingInProgress:Array<number>,
}

export type MapDispatchUsersToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
    getUsersThunk: (currentPage: number, pageSize: number) => void,
}
export type UsersContainerPropsType = MapStatePropsType & MapDispatchUsersToPropsType


export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsersThunk(currentPage, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        // users: getUsersSuper(state),//reselect
        users: getUsers(state),
        currentPage:getCurrentPage(state),
        pageSize:getPageSize(state),
        isFetching:getIsFetching(state),
        totalUsersCount:getTotalUsersCount(state),
        followingInProgress:getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
        follow: followSuccess,
        unfollow: unfollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunk: requestUsers,
    }),
    WithAuthRedirect)(UsersContainer)

