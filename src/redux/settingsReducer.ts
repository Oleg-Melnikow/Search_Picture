export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: undefined as string | undefined
}

type InitialStateType = typeof initialState

export const settingsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export type setAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type setAppErrorActionType = ReturnType<typeof setAppErrorAC>
export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SET-STATUS", status} as const);
export const setAppErrorAC = (error: string | undefined) => ({type: "APP/SET-ERROR", error} as const);

type ActionsType = setAppStatusActionType | setAppErrorActionType