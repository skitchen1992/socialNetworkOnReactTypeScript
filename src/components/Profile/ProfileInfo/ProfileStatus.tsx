import React from "react";


type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            ...this.state,
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            ...this.state,
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }

    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode.bind(this)}
                             value={this.state.status} autoFocus/>
                    : <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "Нет статуса"}</span>}
            </div>
        )
    }

}