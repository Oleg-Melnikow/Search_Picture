import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

type MediaCardPropsTYpe = {
    src: string,
}

export function ImageCard(props: MediaCardPropsTYpe) {

    const useStyles = makeStyles({
        root: {
            minWidth: 345,
            margin: "10px"
        },
        media: {
            minHeight: 240,
        },
        button: {
            justifyContent: "center"
        }
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}
                           image={props.src}
                           title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardActions className={classes.button}>
                <Button size="small" color="primary">
                    Bookmark it!
                </Button>
            </CardActions>
        </Card>
    );
}
