import React from "react";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT_PAGE = 'SET_TOTAL_COUNT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UsersTypeAC =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

type LocationType = {
    city: string,
    country: string,
}
type PhotosType = {
    small: string,
    large: string,
}
export type UserType = {
    id: number,
    photos: PhotosType,
    name: string,
    status: string,
    followed: boolean,
    location: LocationType,
    uniqueUrlName: null,

}
export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer: React.Reducer<InitialStateType, UsersTypeAC> = (state = initialState, action)
    : InitialStateType => {

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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT_PAGE:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state

    }
}

export const follow = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS, users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT_PAGE, totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    } as const
}


export default usersReducer;