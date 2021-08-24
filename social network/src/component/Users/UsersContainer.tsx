import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import Users from "./Users";
import {
    followSuccess, toggleFollowingProgress,
    InitialStateType,
    setCurrentPage,
    unfollowSuccess,
    getUsersThunk,
} from "../../Redax/users-reducer";
import Preloader from "../commen/preloader/Preloader";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from 'redux';


export type MapStatePropsType = {
    usersPage: InitialStateType,
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
        this.props.getUsersThunk(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsersThunk(currentPage, this.props.usersPage.pageSize)
    }

    render() {
        return (
            <>
                {this.props.usersPage.isFetching ? <Preloader/> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.usersPage.totalUsersCount}
                    pageSize={this.props.usersPage.pageSize}
                    currentPage={this.props.usersPage.currentPage}
                    users={this.props.usersPage.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.usersPage.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
        follow: followSuccess,
        unfollow: unfollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunk,
    }),
    WithAuthRedirect)(UsersContainer)

