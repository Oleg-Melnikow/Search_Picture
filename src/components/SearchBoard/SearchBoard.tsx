import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Button, Grid, makeStyles, TextField} from '@material-ui/core';
import {ImageCard} from "../ImageCard/ImageCard";
import {ErrorSnackbar} from "../ErrorSnackbar/ErrorSnackbar";
import {SuccessSnackBar} from "../SuccessSnackBar/SuccessSnackBar";
import s from "./SearchBoard.module.css"
import {DomainPhotoType} from "../../redux/appReducer";
import { InputAdornment } from '@material-ui/core';
import {BackspaceOutlined} from '@material-ui/icons';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        margin: "10px"
    },
    iconButton: {
        padding: 10,
    },
}));

type PropType = {
    photo: Array<DomainPhotoType>,
    isDisabled: boolean,
    error: string | null,
    title: string,
    nextPage: () => void,
    clearInput: () => void,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void,
    remotePhoto: (id: string, picture: DomainPhotoType) => void
}

export function SearchBoard(props: PropType) {
    const {photo, isDisabled, error, title, nextPage, onChangeHandler, onKeyPressHandler, remotePhoto} = props
    const classes = useStyles();

    return (
        <div>
            <ErrorSnackbar/>
            <SuccessSnackBar value="Add picture success!"/>
            <TextField id="outlined-basic" label="Find images" variant="outlined" className={classes.root}
                       error={!!error} helperText={error}
                       value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}
                       InputProps={{
                           endAdornment: (
                               <InputAdornment position="end" onClick={props.clearInput}>
                                   <IconButton onClick={props.clearInput}>
                                       <BackspaceOutlined/>
                                   </IconButton>
                               </InputAdornment>
                           )
                       }}
            />

            {!!photo.length &&
            <div>
                <div style={{margin: "10px", display: "flex", justifyContent: "flex-end", marginRight: "30px"}}>
                    <Button variant="outlined" onClick={nextPage} disabled={isDisabled}>
                        Next page
                    </Button>
                </div>
                <Grid container direction="row" justify="center" alignItems="center" className={s.images}>
                    {photo.map((img, key) => {
                        return <ImageCard key={img.id} picture={img} remotePhoto={() => remotePhoto(img.id, img)}
                                          description="Bookmark it!"/>
                    })}
                </Grid>
            </div>}
        </div>
    )
}