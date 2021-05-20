import {makeStyles, TextField} from '@material-ui/core';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DomainPhotoType, setTasksTC} from "../../redux/appReducer";
import {AppRootStateType} from "../../redux/store";
import {ImageCard} from "./ImageCard";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%"
    },
    images: {
        maxHeight: 500,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        overflow: "auto"
    }
}));

export function SearchBoard() {
    const photo = useSelector<AppRootStateType, DomainPhotoType>(state => state.app);
    const dispatch = useDispatch()

    const classes = useStyles();
    const [error, setError] = useState<string | null>(null)
    const [title, setTitle] = useState("");

    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== "") {
            dispatch(setTasksTC(title))
            setTitle("")
        } else {
            setError("Title is required")
        }
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
            <div style={{padding: "10px"}}>
                <TextField id="outlined-basic" label="Find images" variant="outlined" className={classes.root}
                           error={!!error} helperText={error}
                           value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            </div>
            <div className={classes.images}>
                {!!photo.length && photo.map((img, key) => {
                    return <ImageCard key={img.id} src={img.url}/>
                })}
            </div>
        </div>

    )
}
