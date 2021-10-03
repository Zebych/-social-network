import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";
import {UserType} from "./users-reducer";



//reselect
/*export const getUsersSelector = (state: AppStateType): Array<UserType> => {
    return getUsers(state).filter(u=>true)
}
export const getUsersSuper = createSelector(getUsers,getIsFetching(users,isFetching)=>{
    users.filter(u=>true)
})*/

//selectors
export const getUsers = (state: AppStateType): Array<UserType> => {
    return state.usersPage.users
}
export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}
export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}
export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}
export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}
export const getFollowingInProgress = (state: AppStateType): Array<number> => {
    return state.usersPage.followingInProgress
}
