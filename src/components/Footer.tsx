import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}));

export function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Copyrights
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
