import {setAppErrorAC, setAppStatusAC, settingsReducer, settingsStateType} from "../redux/settingsReducer";

let startState: settingsStateType

beforeEach(() => {
    startState = {status: "idle", error: undefined}
})

test('correct error should be set from state', () => {
    const endState = settingsReducer(startState, setAppErrorAC("Enter correct naming"));
    expect(endState.error).toBe("Enter correct naming");
});

test('correct status should be set from state', () => {
    const endState = settingsReducer(startState, setAppStatusAC("succeeded"));
    expect(endState.status).toBe("succeeded");
});