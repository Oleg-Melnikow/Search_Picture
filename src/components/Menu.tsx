import {Grid, IconButton, makeStyles, Paper} from '@material-ui/core';
import React from 'react';
import {Bookmarks, Cloud} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: "15%",
        background: "#ccc"
    }
}));

export function Menu() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Grid container direction="column" alignItems="center">
                <IconButton >
                    <Cloud/>
                </IconButton>
                <IconButton >
                    <Bookmarks/>
                </IconButton>
            </Grid>
        </Paper>

    )
}
