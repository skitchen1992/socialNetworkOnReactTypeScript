import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
const drawerWidth = '20em';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth})`,
            marginLeft: drawerWidth ,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,

        },
        paper: {
            top: 'auto',
            left: 'auto',
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);

export default function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                PaperProps={{className: classes.paper}}
                anchor="left"
            >
                <div className={classes.toolbar}/>
                <Divider/>

                <List>

                    <ListItem button component={Link} to="/profile">
                        <ListItemIcon> <AccountCircleIcon/></ListItemIcon>
                        <ListItemText primary={"Profile"}/>
                    </ListItem>
                    <ListItem button component={Link} to="/dialogs">
                        <ListItemIcon> <ChatBubbleOutlineIcon/></ListItemIcon>
                        <ListItemText primary={"Messages"}/>
                    </ListItem>
                    <ListItem button component={Link} to="/users">
                        <ListItemIcon> <PeopleOutlineIcon/></ListItemIcon>
                        <ListItemText primary={"Users"}/>
                    </ListItem>

                </List>
                <Divider/>

            </Drawer>
        </div>
    );
}


