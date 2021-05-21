import {Grid, IconButton, makeStyles, Paper} from '@material-ui/core';
import React from 'react';
import {Bookmarks, Cloud} from "@material-ui/icons";
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "10%",
        background: "#ccc"
    }
}));

export function Menu() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid container direction="column" alignItems="center">
                <NavLink to="/search">
                    <IconButton>
                        <Cloud/>
                    </IconButton>
                </NavLink>
                <NavLink to="/bookmarks">
                    <IconButton>
                        <Bookmarks/>
                    </IconButton>
                </NavLink>
            </Grid>
        </Paper>

    )
}
