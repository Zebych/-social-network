import React, { useState } from "react";
import s from "./Post.module.css";
import SuperButton from "../../../common/SuperButton/SuperButton";



type PropsPostType = {
    message: string
    avatar: string
    likeCounts: number

}


function Post(props: PropsPostType) {

    let [count, setCount] = useState(props.likeCounts)
    let dateObj = new Date('December 17, 2021 03:24:00').toLocaleString()


    return (

        <div className={s.item}>
           <div  style={{display:'flex'}}>
               <img alt={'postImage'} src={props.avatar} />
               <div  className={s.info}>
                   <div style={{marginBottom:'5px'}}>
                       <b>Test User</b>
                   </div>
                   <div>{dateObj}</div>
               </div>
           </div>
            <div className={s.text} >{props.message}</div>

            <div>
                <SuperButton  onClick={() => setCount(count + 1)}> {count} like </SuperButton>
            </div>
        </div>


    )
}

export default Post