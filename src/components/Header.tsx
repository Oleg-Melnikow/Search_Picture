import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import React from 'react';
import {NavLink} from 'react-router-dom';

export function Header() {

    return (
        <div style={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink to="/search" style={{color: "inherit"}}>
                        <Typography variant="h6">
                            Image Finder
                        </Typography>
                    </NavLink>
                    <div style={{flexGrow: 1}}/>
                    <IconButton color="inherit">
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
