import {profileReducer,
    addPost,
    initialStateType,
    setStatus,
    setUserProfile,
    editModeProfileInfo
} from "../profileReducer";

let startState: initialStateType = {
    postData: [
        {id: '1', post: 'Hi,how a you?', likeCounts: 2, avatar: ''},
        {id: '2', post: 'Yo', likeCounts: 3, avatar: ''},
        {id: '3', post: 'YOyoYo', likeCounts: 5, avatar: ''}
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
    editProfileError: '',
    profileInfoEditMode: false,
}

test('correct post should be added', () => {

    let postMessage = "New message"
    const endState = profileReducer(startState, addPost(postMessage))

    expect(endState.postData.length).toBe(4)
    expect(endState.postData[3].post).toBe(postMessage)
    expect(endState.postData[3].likeCounts).toBe(0)
})

test('correct post should be updated', () => {

    let newText = "updated post"
    const endState = profileReducer(startState, setStatus(newText))

    expect(endState.status).toBe(newText)
})

test('set users profile', () => {

    let newProfile = {
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

    const endState = profileReducer(startState, setUserProfile(newProfile))

    expect(endState.profile.userId).toBe(189167)
})