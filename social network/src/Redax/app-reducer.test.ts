import AppReducer, {initializedSuccess, InitialStateType} from "./app-reducer";

const startState: InitialStateType = {
    initialized: false,
}

test('initialized', () => {

    const endState = AppReducer(startState, initializedSuccess())

    expect(endState.initialized).toBe(true)
})
