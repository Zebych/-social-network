import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

function DialogItem(props: DialogItemPropsType) {
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={"/dialogs/"+ props.id}> {props.name} </NavLink>
    </div>
}

 type DialogItemPropsType = {
    name: string
    id: string
}

export default DialogItem