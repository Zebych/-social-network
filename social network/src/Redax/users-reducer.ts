import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

enum ActionsType {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_COUNT_PAGE = 'SET_TOTAL_COUNT_PAGE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS',
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT_PAGE = 'SET_TOTAL_COUNT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
}
export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersTypeAC): InitialStateType => {

    switch (action.type) {
        case ActionsType.FOLLOW:
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
        case ActionsType.UNFOLLOW:
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
        case ActionsType.SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case ActionsType.SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case ActionsType.SET_TOTAL_COUNT_PAGE:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case ActionsType.TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case ActionsType.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state

    }
}

//Action
export const followSuccess = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const unfollowSuccess = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsers = (users: UserType[]) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPage = (page: number) => {
    return {type: SET_CURRENT_PAGE, currentPage: page} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: SET_TOTAL_COUNT_PAGE, totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const
}

//Thunk
export const requestUsers = (page: number, pageSize: number) => {

    return (dispatch: Dispatch<UsersTypeAC>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersTypeAC>) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<UsersTypeAC>) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

//Types
export type UsersTypeAC =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

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
export default usersReducer;