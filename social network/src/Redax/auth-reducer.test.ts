import AuthReducer, {InitialAuthStateType, setAuthUserData} from "./auth-reducer";

const startState: InitialAuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

test(' status login', () => {

    const endState = AuthReducer(startState, setAuthUserData(
        null, null, null, true))

    expect(endState.isAuth).toBe(true)
})
test(' status logout', () => {

    const endState = AuthReducer(startState, setAuthUserData(
        null, null, null, false))

    expect(endState.isAuth).toBe(false)
})
test('get user data', () => {

    const endState = AuthReducer(startState, setAuthUserData(
        1, '@mail', 'login', true))

    expect(endState.isAuth).toBe(true)
    expect(endState.id).toBe(1)
    expect(endState.email).toBe('@mail')
    expect(endState.login).toBe('login')
})