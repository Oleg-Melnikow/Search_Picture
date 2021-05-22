import {AppBar, Toolbar, Typography} from '@material-ui/core';
import React from 'react';

export function Footer() {

    return (
        <div style={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        Copyrights
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
