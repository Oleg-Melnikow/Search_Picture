import {AppBar, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        marginRight: theme.spacing(2)
    },
    between: {
        flexGrow: 1,
    }
}));

export function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Image Finder
                    </Typography>
                    <div className={classes.between}/>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
