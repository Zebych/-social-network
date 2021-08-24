import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
<<<<<<< HEAD
import {PhotosType, ProfileType, setUsersProfile} from "../../Redax/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../Redax/redux-store";
import {InitialAuthStateType} from "../../Redax/auth-reducer";
=======
import {getProfile, ProfileType, setUsersProfile} from "../../Redax/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType} from "../../Redax/store";
>>>>>>> a330a240b702ac18abfbf44352d84de8a66679f3


type MathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profilePage: PhotosType,
    auth: InitialAuthStateType,
}
type MapDispatchPropsType = {
    setUsersProfile: (profile: ProfileType) => void,
    getProfile:(userId:string)=>void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<MathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
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

export default connect(mapStateToProps, {setUsersProfile,getProfile})(WithUrlDataContainerComponent);
