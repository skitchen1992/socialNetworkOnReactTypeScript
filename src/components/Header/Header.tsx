import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {UsersPropsType} from "./HeaderContainer";
import {
    AppBar,
    Button,
    createStyles,
    makeStyles,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

function Header(props: UsersPropsType) {
    const classes = useStyles();
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        SocialNetwork
                    </Typography>
                    {props.isAuth
                        ? <span>{props.login} - <Button size={"small"} variant="contained" color="secondary"
                                                        onClick={props.logout}>Logout</Button></span>
                        : <Button color="secondary" component={Link} to='/login'>Login</Button>
                    }

                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;