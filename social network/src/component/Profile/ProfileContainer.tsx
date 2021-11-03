import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, InitialStateType, updateStatus,} from "../../Redax/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../Redax/redux-store";
import {compose} from 'redux';


type MathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profilePage: InitialStateType | null,
    authorizedUserId:number|null,
}
type MapDispatchPropsType = {
    getUsersProfile: (userId: string) => void,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<MathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            let userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push(('/login'))
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profilePage} getStatus={this.props.getStatus} updateStatus={this.props.updateStatus}/>
            </div>);
    }
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    profilePage: state.profilePage,
    authorizedUserId:state.auth.id,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile,updateStatus,getStatus}),
    withRouter)(ProfileContainer)