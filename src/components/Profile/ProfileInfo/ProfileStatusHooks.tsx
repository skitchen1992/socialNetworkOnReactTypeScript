import React, {useEffect, useState} from "react";
import CreateIcon from '@material-ui/icons/Create';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const onStatusChange = (e:any) => {
        setStatus(e.currentTarget.value)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    return (
        <div><span>Status: </span>
            {editMode
                ? <input onChange={onStatusChange} onBlur={deactivateEditMode}
                         value={status} autoFocus/>
                : <span onDoubleClick={activateEditMode}><CreateIcon fontSize="small"/>{status || "Нет статуса"}</span>}

        </div>
    )
}


