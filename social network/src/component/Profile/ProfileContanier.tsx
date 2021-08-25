import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profilePageType, ProfileType, setUsersProfile} from "../../Redax/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../Redax/redux-store";
import {InitialAuthStateType} from "../../Redax/auth-reducer";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from 'redux';


type MathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profilePage: profilePageType | null,
}
type MapDispatchPropsType = {
    setUsersProfile: (profile: ProfileType) => void,
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<MathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profilePage}/>
            </div>);
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profilePage: state.profilePage,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUsersProfile}),
    withRouter)(ProfileContainer)