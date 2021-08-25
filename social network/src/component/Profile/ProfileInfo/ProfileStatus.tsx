import React from "react";
import c from './ProfileInfo.module.css'


type ProfileStatusPropsType = {
    status: string,
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
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
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
                </div>
                <div>
                    {this.state.editMode &&
                    <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status}/>}
                </div>
            </div>
        )
    }
}