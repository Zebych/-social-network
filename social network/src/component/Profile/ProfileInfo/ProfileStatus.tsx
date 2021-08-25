import React, {ChangeEvent} from "react";

import c from './ProfileInfo.module.css'


type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}
type LocalStateType = {
    editMode: boolean,
    status: string,
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state: LocalStateType = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: LocalStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.state.status})
        }

    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>}
                </div>
                <div>
                    {this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode}
                           value={this.state.status}/>}
                </div>
            </div>
        )
    }
}