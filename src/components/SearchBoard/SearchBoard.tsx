import {Button, Grid, makeStyles, TextField} from '@material-ui/core';
import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DomainPhotoType, nextTasksTC, remotePhotoAC, setPagesAC, setPhotosAC, setTasksTC} from "../../redux/appReducer";
import {AppRootStateType} from "../../redux/store";
import {ImageCard} from "../ImageCard";
import {addPicture} from "../../redux/lacalstorageReducer";
import {ErrorSnackbar} from "../ErrorSnackbar/ErrorSnackbar";
import {setAppStatusAC} from "../../redux/settingsReducer";
import {SuccessSnackBar} from "../SuccessSnackBar/SuccessSnackBar";
import s from "./SearchBoard.module.css"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        margin: "10px"
    }
}));

export function SearchBoard() {
    const photo = useSelector<AppRootStateType, Array<DomainPhotoType>>(state => state.app.photo);
    const pages = useSelector<AppRootStateType, number>(state => state.app.pages);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPhotosAC([]))
        dispatch(setPagesAC({page: 1, pages: 0}))
    }, [])

    const classes = useStyles();
    const [error, setError] = useState<string | null>(null)
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");

    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== "") {
            setTags("")
            dispatch(setTasksTC(title))
            setTags(title)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    const nextPage = () => {
        dispatch(nextTasksTC(tags))
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
        <div>
            <ErrorSnackbar/>
            <SuccessSnackBar value="Add picture success!"/>
            <TextField id="outlined-basic" label="Find images" variant="outlined" className={classes.root}
                       error={!!error} helperText={error}
                       value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            {!!photo.length &&
            <div>
                <div style={{margin: "10px", display: "flex", justifyContent: "flex-end", marginRight: "30px"}}>
                    <Button variant="outlined" onClick={nextPage} disabled={!pages}>
                        Next page
                    </Button>
                </div>
                <Grid container direction="row" justify="center" alignItems="center" className={s.images}>
                    {photo.map((img, key) => {
                        return <ImageCard key={img.id} picture={img} remotePhoto={remotePhoto}
                                          description="Bookmark it!"/>
                    })}
                </Grid>
            </div>}
        </div>

    )
}
