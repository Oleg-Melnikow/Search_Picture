import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DomainPhotoType, nextTasksTC, remotePhotoAC, setPagesAC, setPhotosAC, setTasksTC} from "../../redux/appReducer";
import {AppRootStateType} from "../../redux/store";
import {addPicture} from "../../redux/lacalstorageReducer";
import {setAppStatusAC} from "../../redux/settingsReducer";
import {SearchBoard} from './SearchBoard';


export function SearchBoardContainer() {
    const photo = useSelector<AppRootStateType, Array<DomainPhotoType>>(state => state.app.photo);
    const isDisabled = useSelector<AppRootStateType, boolean>(state => state.app.isDisabled);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPhotosAC([]))
        dispatch(setPagesAC({page: 1, pages: 0}))
    }, [])

    const [error, setError] = useState<string | null>(null)
    const [title, setTitle] = useState<string>("");

    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== "") {
            dispatch(setTasksTC(title))
        } else {
            setError("Title is required")
        }
    }

    const clearInput = () => {
        setTitle("");
        dispatch(setPhotosAC([]));
    }

    const nextPage = () => {
        dispatch(nextTasksTC(title))
    }

    const remotePhoto = (id: string, picture: DomainPhotoType) => {
        dispatch(remotePhotoAC(id))
        dispatch(addPicture(picture))
        dispatch(setAppStatusAC("succeeded"))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) setError(null)
        e.key === "Enter" && addItem()
    }

    return (
        <SearchBoard photo={photo} isDisabled={isDisabled} error={error} title={title} nextPage={nextPage}
                     onChangeHandler={onChangeHandler} remotePhoto={remotePhoto}
                     onKeyPressHandler={onKeyPressHandler} clearInput={clearInput}/>
    )
}
