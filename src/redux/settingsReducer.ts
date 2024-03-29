export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: undefined as string | undefined
}

export type settingsStateType = typeof initialState

export const settingsReducer = (state: settingsStateType = initialState, action: ActionsType): settingsStateType => {
    switch (action.type) {
        case 'APP/SETTINGS/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SETTINGS/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export type setAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type setAppErrorActionType = ReturnType<typeof setAppErrorAC>
export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SETTINGS/SET-STATUS", status} as const);
export const setAppErrorAC = (error: string | undefined) => ({type: "APP/SETTINGS/SET-ERROR", error} as const);

type ActionsType = setAppStatusActionType | setAppErrorActionType