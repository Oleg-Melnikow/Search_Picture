import {Grid, IconButton, Paper} from '@material-ui/core';
import React from 'react';
import {Bookmarks, Cloud} from "@material-ui/icons";
import {NavLink} from 'react-router-dom';

export function Menu() {

    return (
        <Paper style={{ width: "10%", background: "#ccc"}}>
            <Grid container direction="column" alignItems="center">
                <NavLink to="/">
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
