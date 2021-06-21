import React from "react";
import c from './Posts.module.css'

type messageType = {
    message: string
    likeCount: number
}

const Post: React.FC<messageType> = (props) => {
    return (
        <div className={c.profile}>
            <img src="https://meragor.com/files/styles//ava_800_800_wm/_big-and-goofy-smile_0.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likeCount} like</span>
            </div>
        </div>
    );
}
export default Post;