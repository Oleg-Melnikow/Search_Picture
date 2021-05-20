import {ThunkAction} from "redux-thunk";
import {appAPI, PhotoType} from "../api/api";
import {AppRootStateType} from "./store";

const initialState: InitialStateType = []

export type DomainPhotoType = Array<PhotoType & { url: string }>
type InitialStateType = DomainPhotoType

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-PHOTOS":
            return [
                ...action.photos.map(ph => {
                    return {
                        ...ph,
                        url: ph.originalformat ?
                            `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.${ph.originalformat}` :
                            `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.jpg`
                    }
                })
            ]
        default:
            return state
    }
}

export type setPhotosActionType = ReturnType<typeof setPhotosAC>
export const setPhotosAC = (photos: Array<PhotoType>) =>  ({type: "APP/SET-PHOTOS", photos} as const)

type ActionsType = setPhotosActionType;

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>

export const setTasksTC = (text: string): ThunkType =>
    (dispatch, getState: () => AppRootStateType) => {
        dispatch(setPhotosAC([]))
        appAPI.getPictures(text)
            .then(res => {
                if (res.data.stat === "ok") {
                    if (res.data.photos.photo.length) {
                        dispatch(setPhotosAC(res.data.photos.photo))
                    } else {
                        throw new Error("No images found for your query. Please enter a valid query")
                    }
                } else {
                    throw new Error("res.data")
                }
            })
            .catch(error => {
                console.log(error)
            })
    }