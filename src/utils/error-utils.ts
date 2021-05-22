import { Dispatch } from 'redux';
import {ResponseType} from "../api/api";
import {setAppErrorAC, setAppErrorActionType, setAppStatusAC, setAppStatusActionType} from "../redux/settingsReducer";

// generic function
export const handleServerAppError = (data: ResponseType, dispatch: ErrorUtilsDispatchType) => {
    if (data.stat === "fail") {
        dispatch(setAppErrorAC(data.message))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (error: {message: string}, dispatch: ErrorUtilsDispatchType) => {
    dispatch(setAppErrorAC(error.message))
    dispatch(setAppStatusAC('failed'))
}

type ErrorUtilsDispatchType = Dispatch<setAppErrorActionType | setAppStatusActionType>