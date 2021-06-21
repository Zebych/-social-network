import React from 'react';
import c from './Message.module.css';


type MessagesItemType = {
    message: string
}


export const Message: React.FC<MessagesItemType> = (props) => {
    return <div className={c.message}>{props.message}</div>
}
