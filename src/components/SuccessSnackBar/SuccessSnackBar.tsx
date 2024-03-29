import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from '../../redux/store';
import {RequestStatusType, setAppStatusAC} from '../../redux/settingsReducer';
import Alert from '@material-ui/lab/Alert';

export function SuccessSnackBar(props: { value: string }) {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.settings.status);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setAppStatusAC("idle"));
    }

    return (
        <Snackbar open={status === "succeeded"} autoHideDuration={1000} onClose={handleClose}
                  style={{bottom: "80px"}}>
            <Alert severity="success">{props.value}</Alert>
        </Snackbar>
    )
}
