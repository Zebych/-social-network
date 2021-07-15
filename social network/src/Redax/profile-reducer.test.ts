import {profilePageType} from "./store";
import profileReducer, {AddPostAC, UpdateNewPostTextAC} from "./profile-reducer";

test ('correct post should be added',()=>{
    let startState:profilePageType = {
        PostsData: [
            {id: 1, message: 'Hi,how a you?', likesCount: 2},
            {id: 2, message: 'Yo', likesCount: 3},
            {id: 3, message: 'YOyoYo', likesCount: 5}
        ],
        messageNewPostText: "Enter message post"
    }
    let postMessage="New message"
    const endState=profileReducer(startState,AddPostAC(postMessage))

    expect(endState.PostsData.length).toBe(4)
    expect(endState.PostsData[3].message).toBe(postMessage)
    expect(endState.PostsData[3].id).toBe(4)
    expect(endState.PostsData[3].likesCount).toBe(0)
})

test ('correct post should be updated',()=>{
    let startState:profilePageType = {
        PostsData: [
            {id: 1, message: 'Hi,how a you?', likesCount: 2},
            {id: 2, message: 'Yo', likesCount: 3},
            {id: 3, message: 'YOyoYo', likesCount: 5}
        ],
        messageNewPostText: "Enter message post"
    }
    let newText="updated post"
    const endState=profileReducer(startState,UpdateNewPostTextAC(newText))

    expect(endState.messageNewPostText).toBe(newText)

})