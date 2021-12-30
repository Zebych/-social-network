import  {appReducer,initializedSuccess, InitialStateType} from "../appReducer";

const startState: InitialStateType = {
    initialized: false,
}

test('initialized', () => {

    const endState = appReducer(startState, initializedSuccess())

    expect(endState.initialized).toBe(true)
})
