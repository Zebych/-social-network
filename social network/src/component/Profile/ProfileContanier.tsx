import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PhotosType, ProfileType, setUsersProfile} from "../../Redax/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../Redax/redux-store";
import {InitialAuthStateType} from "../../Redax/auth-reducer";


type MathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profilePage: PhotosType,
    auth: InitialAuthStateType,
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
        if (!this.props.auth.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profilePage}/>
            </div>);
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profilePage: state.profilePage,
    auth: state.auth,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);
