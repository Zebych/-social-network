import { createSelector } from "reselect";
import { AppStoreType } from "../reduxStore";

export const getUsersSelector = (state: AppStoreType) => state.usersPage.users
export const getUsers = createSelector(getUsersSelector, (users) => users)

export const getPageSize = (state: AppStoreType) => state.usersPage.pageSize

export const getTotalUsersCount = (state: AppStoreType) => state.usersPage.totalUsersCount

export const getCurrentPage = (state: AppStoreType) => state.usersPage.currentPage

export const getIsProgress = (state: AppStoreType) => state.usersPage.isInProgress

export const getIsFollowingProgress = (state: AppStoreType) => state.usersPage.isFollowingProgress
