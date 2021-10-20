import profileReducer, {addPostAC, InitialStateType, setStatus, setUsersProfile, updateStatus} from "./profile-reducer";

let startState:InitialStateType ={
    PostsData: [
        {id: 1, message: 'Hi,how a you?', likesCount: 2},
        {id: 2, message: 'Yo', likesCount: 3},
        {id: 3, message: 'YOyoYo', likesCount: 5}
    ],
    profile: {
        aboutMe: '',
        contacts:
            {
                facebook: '',
                github: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: '',
            },
        fullName: "Any",
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos:
            {
                large: '',
                small: '',
            },
        userId: 18916,
    },
    status: '',
}

test ('correct post should be added',()=>{

    let postMessage="New message"
    const endState=profileReducer(startState,addPostAC(postMessage))

    expect(endState.PostsData.length).toBe(4)
    expect(endState.PostsData[3].message).toBe(postMessage)
    expect(endState.PostsData[3].id).toBe(4)
    expect(endState.PostsData[3].likesCount).toBe(0)
})

test ('correct post should be updated',()=>{

    let newText="updated post"
    const endState=profileReducer(startState,setStatus(newText))

    expect(endState.status).toBe(newText)
})

test ('set users profile',()=>{

    let newProfile=  {
        aboutMe: '',
            contacts:
        {
            facebook: '',
                github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: '',
        },
        fullName: "Any",
            lookingForAJob: false,
            lookingForAJobDescription: '',
            photos:
        {
            large: '',
                small: '',
        },
        userId: 189167,
    }

    const endState=profileReducer(startState,setUsersProfile(newProfile))

    expect(endState.profile.userId).toBe(189167)
})