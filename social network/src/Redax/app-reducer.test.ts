import appReducer, {initializedSuccess, InitialStateType} from "./app-reducer";

const startState: InitialStateType = {
    initialized: false,
}

test('initialized', () => {

    const endState = appReducer(startState, initializedSuccess())

    expect(endState.initialized).toBe(true)
})
