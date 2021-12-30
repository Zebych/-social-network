import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {
    getUserProfileThunk,
    getUsersStatusThunk,
    ProfileType,
    updatePhotoThunk,
    updateUserStatusThunk
} from "../../redux/profileReducer";
import {AppStoreType} from "../../redux/reduxStore";
import Profile from "./Profile";


type PathParamsType = {
    userId: string
}


type mapStateToPropsType = {
    profile: ProfileType
    status: string,
    autorizedUserId: number | null

}

type MapDispatchPropsType = {
    getUserProfileThunk: (userId: string) => void
    getUsersStatusThunk: (userId: string) => void
    updateUserStatusThunk: (status: string) => void
    updatePhotoThunk: (photo: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = mapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    savePhoto(){

    }

    refreshProfile() {
        let userId = this.props.match.params.userId

        if (userId || this.props.autorizedUserId) {

            userId = userId ?? this.props.autorizedUserId?.toString()

            this.props.getUserProfileThunk(userId)
            this.props.getUsersStatusThunk(userId)

        } else {
            this.props.history.push('/login')
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {

        return (
            <Profile isOwner={!this.props.match.params.userId} {...this.props} />
        )
    }
}

let mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.data.id,
})


export default compose<React.ComponentType>(AuthRedirect,
    connect(mapStateToProps, {getUserProfileThunk, getUsersStatusThunk, updateUserStatusThunk, updatePhotoThunk}),
    withRouter
)(ProfileContainer)