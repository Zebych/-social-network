import usersReducer, {
    followSuccess,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    UserType
} from "./users-reducer";

const startState: InitialStateType = {
    users: [{
        id: 1001,
        photos: {
            small: 'string',
            large: 'string',
        },
        name: 'null',
        status: 'null',
        followed: false,
        location: {
            city: 'string',
            country: 'string',
        },
        uniqueUrlName: null,
    }] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
}

test('follow Success', () => {
    const idUser = 1001
    const endState = usersReducer(startState, followSuccess(idUser))

    expect(endState.users[0].followed).toBe(true)
})
test('unfollow Success', () => {
    const idUser = 100
    const endState = usersReducer(startState, followSuccess(idUser))

    expect(endState.users[0].followed).toBe(false)
})
test('set users', () => {
    const newUsers = [{
        id: 1002,
        photos: {
            small: 'string',
            large: 'string',
        },
        name: 'null',
        status: 'null',
        followed: false,
        location: {
            city: 'string',
            country: 'string',
        },
        uniqueUrlName: null,
    }]
    const endState = usersReducer(startState, setUsers(newUsers))

    expect(endState.users[0].id).toBe(1002)
})
test('set current page', () => {
    const page = 100
    const endState = usersReducer(startState, setCurrentPage(page))

    expect(endState.currentPage).toBe(100)
})
test('set total users count', () => {
    const totalCount = 100
    const endState = usersReducer(startState, setTotalUsersCount(totalCount))

    expect(endState.totalUsersCount).toBe(100)
})
test('toggle is fetching', () => {
    const isFetching = true
    const endState = usersReducer(startState, toggleIsFetching(isFetching))

    expect(endState.isFetching).toBe(true)
})
test('toggle following progress', () => {
    const endState = usersReducer(startState, toggleFollowingProgress(true, 1001))

    expect(endState.followingInProgress.length).toBe(1)
})
