import React from 'react';
import {Dispatch} from 'redux';
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import axios from 'axios';
import Users from "./Users";
import preloader from '../../assets/images/Preloader.gif'
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../Redax/users-reducer";
import Preloader from "../commen/preloader/Preloader";


export type MapStatePropsType = {
    usersPage: InitialStateType,

}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching:(isFetching: boolean)=>void,
}
export type UsersContainerPropsType = MapStatePropsType & MapDispatchToPropsType


export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        return (
            <>
                {this.props.usersPage.isFetching ? <Preloader/>:null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.usersPage.totalUsersCount}
                    pageSize={this.props.usersPage.pageSize}
                    currentPage={this.props.usersPage.currentPage}
                    users={this.props.usersPage.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
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
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default MyPostsContainer;

