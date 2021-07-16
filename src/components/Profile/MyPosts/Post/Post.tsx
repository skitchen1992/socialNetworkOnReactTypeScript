import './Post.module.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type PostType = {
    id:string ,
    message:string,
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 10,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
function Post(props: PostType ){
    const classes = useStyles();
    return(
        <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
            </Typography>

            <Typography variant="body2" component="p">
                {props.message}
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        </Card>
    )
}
export default Post;


