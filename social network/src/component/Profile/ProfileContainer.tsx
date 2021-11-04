import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, InitialStateType, savePhoto, updateStatus,} from "../../Redax/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../Redax/redux-store";
import {compose} from 'redux';


type MathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profilePage: InitialStateType | null,
    authorizedUserId: number | null,
}
type MapDispatchPropsType = {
    getUsersProfile: (userId: string) => void,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
    savePhoto:any,
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<MathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {

        let userId = this.props.match.params.userId
        if (!userId) {
            let userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push(('/login'))
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profilePage} getStatus={this.props.getStatus}
                         updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}/>
            </div>);
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profilePage: state.profilePage,
    authorizedUserId: state.auth.id,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, updateStatus, getStatus,savePhoto}),
    withRouter)(ProfileContainer)