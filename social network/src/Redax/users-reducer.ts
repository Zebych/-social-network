import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object_helpers/object-helpers";

enum ActionsUsersType {
    FOLLOW = 'users/FOLLOW',
    UNFOLLOW = 'users/UNFOLLOW',
    SET_USERS = 'users/SET_USERS',
    SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
    SET_TOTAL_COUNT_PAGE = 'users/SET_TOTAL_COUNT_PAGE',
    TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS',
}

let initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
}
export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersTypeAC): InitialStateType => {

    switch (action.type) {
        case ActionsUsersType.FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id", {followed: true})
            }
        case ActionsUsersType.UNFOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId,"id", {followed: false})
            }
        case ActionsUsersType.SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case ActionsUsersType.SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case ActionsUsersType.SET_TOTAL_COUNT_PAGE:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case ActionsUsersType.TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case ActionsUsersType.TOGGLE_IS_FOLLOWING_PROGRESS:
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
    return {type: ActionsUsersType.FOLLOW, userId} as const
}
export const unfollowSuccess = (userId: number) => {
    return {type: ActionsUsersType.UNFOLLOW, userId} as const
}
export const setUsers = (users: UserType[]) => {
    return {type: ActionsUsersType.SET_USERS, users} as const
}
export const setCurrentPage = (page: number) => {
    return {type: ActionsUsersType.SET_CURRENT_PAGE, currentPage: page} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: ActionsUsersType.SET_TOTAL_COUNT_PAGE, totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: ActionsUsersType.TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: ActionsUsersType.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const
}

//Thunk
export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch<UsersTypeAC>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let response = await usersAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const follow = (userId: number) => async (dispatch: Dispatch<UsersTypeAC>) => {
    dispatch(toggleFollowingProgress(true, userId))
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unfollow = (userId: number) => async (dispatch: Dispatch<UsersTypeAC>) => {
    dispatch(toggleFollowingProgress(true, userId))
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
//refactor thunk
const followUnfollowFlow = async (dispatch: Dispatch<UsersTypeAC>, userId: number, apiMethod: (userId: number) => any, actionCreator: (userId: number) => any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
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