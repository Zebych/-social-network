import React from "react";


function Message(props: MessagePropsType) {
    return <div>
        <div>
            {props.message}
        </div>

    </div>
}

export type MessagePropsType = {
    message: string

}


export default Message