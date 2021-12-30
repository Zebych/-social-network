import React from 'react';
import {connect} from "react-redux";
import {compose} from 'redux';
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {AppStoreType} from "../../redux/reduxStore";
import {
    getCurrentPage,
    getIsFollowingProgress,
    getIsProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/selectors/users-selectors';
import {
    changePageThunk,
    followUserThunk,
    getUsersThunk, unfollowUserThunk,
    UserType
} from "../../redux/usersReducer";
import {Preloader} from "../common/Preloader/Preloader";
import {Users} from "./Users";


export type mapUsersStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isInProgress: boolean
    isFollowingProgress: string[]


}
type mapDispatchToPropsType = {
    getUsersThunk: (currentPage: number, pageSize: number) => void
    changePageThunk: (page: number, pageSize: number) => void
    unfollowUserThunk: (userId: string) => void
    followUserThunk: (userId: string) => void
}


class UsersApiComponent extends React.Component<mapUsersStateToPropsType & mapDispatchToPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.changePageThunk(page, this.props.pageSize)
    }

    render() {


        return (<>
                {this.props.isInProgress ? <Preloader/> : null} {/*Показываем прелоадер, если InProgress = true*/}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    followUserThunk={this.props.followUserThunk}
                    unfollowUserThunk={this.props.unfollowUserThunk}
                    isFollowingProgress={this.props.isFollowingProgress}
                />

            </>
        )
    }
}

const mapUsersStateToProps = (state: AppStoreType): mapUsersStateToPropsType => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isInProgress: getIsProgress(state),
        isFollowingProgress: getIsFollowingProgress(state),

    }
}


export default compose<React.ComponentType>(
    AuthRedirect,
    connect(mapUsersStateToProps, {
        getUsersThunk,
        changePageThunk,
        followUserThunk,
        unfollowUserThunk,
    })
)(UsersApiComponent)

