import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {profilePageType, setUsersProfile} from "../../Redax/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType} from "../../Redax/store";

/*type ProfileStatePropsType={
    profilePage:profilePageType,
    setUsersProfile: (profile: null) =>void,
}*/

type MathParamsType = {
    userId: string,
}
type mapStatePropsType = {
    profile: any,
}
type mapDispatchPropsType = {
    setUsersProfile: (profile: null) => void,
}
type ProfileContainerPropsType = mapStatePropsType & mapDispatchPropsType
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
                <Profile {...this.props} profile={this.props.profile}/>{/*{...this.props}*/}
            </div>);
    }
}

let mapStateToProps = (state: RootStateType): mapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);
