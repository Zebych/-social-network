import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, ProfileType, setUsersProfile} from "../../Redax/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType} from "../../Redax/store";


type MathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profile: ProfileType,
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
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>);
    }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile,getProfile})(WithUrlDataContainerComponent);
