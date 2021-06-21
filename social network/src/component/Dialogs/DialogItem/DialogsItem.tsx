import React from 'react';
import c from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom'

type DialogItemType = {
    id: number
    name: string
}

export const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialog/' + props.id
    return (
        <div className={c.dialogs + ' ' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

