import {ReactComponent} from "*.svg";
import React from "react";


type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            ...this.state,
                editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onBlur={this.activateEditMode.bind(this)} value={this.props.status} autoFocus/>
                    : <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>}
            </div>
        )
    }

}