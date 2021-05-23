import {Grid, IconButton} from '@material-ui/core';
import React from 'react';
import {Bookmarks, Cloud} from "@material-ui/icons";
import {NavLink} from 'react-router-dom';
import s from "./Menu.module.css"

export function Menu() {

    return (
        <div className={s.menu}>
            <Grid container direction="column" alignItems="center">
                <NavLink to="/search" activeClassName={s.active}>
                    <IconButton>
                        <Cloud/>
                    </IconButton>
                </NavLink>
                <NavLink to="/bookmarks" activeClassName={s.active}>
                    <IconButton>
                        <Bookmarks/>
                    </IconButton>
                </NavLink>
            </Grid>
        </div>
    )
}
