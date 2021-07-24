import React from "react";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UsersTypeAC = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

type LocationType = {
    city: string
    country: string
}
type PhotosType={
    small:string
    large:string
}
export type UserType = {
    id: number
    photos: PhotosType
    name: string
    status: string
    followed: boolean
    location: LocationType
    uniqueUrlName: null

}
export type InitialStateType = {
    users: UserType[]
}

let initialState: InitialStateType = {
    users: [
       /* {
            id: 1,
            photos: {small:'https://www.intermedia.ru/img/news_x350/358935.jpg',large:'https://www.intermedia.ru/img/news_x350/358935.jpg'} ,
            name: 'Dead Blonde',
            status: 'I am a boss too',
            followed: true,
            location: {city: 'Vladimir', country: 'Rassia'},
            uniqueUrlName:null
        },
        {
            id: 2,
            photos: {small:'https://www.intermedia.ru/img/news_x350/358935.jpg',large:'https://www.intermedia.ru/img/news_x350/358935.jpg'} ,
            name: 'Alex',
            status: 'I am a boss',
            followed: true,
            location: {city: 'Vladimir', country: 'Rassia'},
            uniqueUrlName:null
        },
        {
            id: 3,
            photos: {small:'https://www.intermedia.ru/img/news_x350/358935.jpg',
                large:'https://www.intermedia.ru/img/news_x350/358935.jpg'} ,
            name: 'Alex',
            status: 'I am a boss',
            followed: true,
            location: {city: 'Vladimir', country: 'Rassia'},
            uniqueUrlName:null
        },*/
    ]
}

const usersReducer: React.Reducer<InitialStateType, UsersTypeAC> = (state=initialState, action): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state

    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS, users
    } as const
}


export default usersReducer;