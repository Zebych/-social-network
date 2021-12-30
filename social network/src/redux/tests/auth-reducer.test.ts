import {authReducer,initialStateType, setAuthUserData} from "../authReducer";

const startState: initialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    invalidCredentials: false,
    captcha: null
}

test(' status login', () => {

    const endState = authReducer(startState, setAuthUserData(
        null, null, null, true))

    expect(endState.isAuth).toBe(true)
})
test(' status logout', () => {

    const endState = authReducer(startState, setAuthUserData(
        null, null, null, false))

    expect(endState.isAuth).toBe(false)
})
test('get user data', () => {

    const endState = authReducer(startState, setAuthUserData(
        1, '@mail', 'login', true))

    expect(endState.isAuth).toBe(true)
    expect(endState.data.id).toBe(1)
    expect(endState.data.email).toBe('@mail')
    expect(endState.data.login).toBe('login')
})