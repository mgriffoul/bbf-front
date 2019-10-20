import React from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Fab} from "@material-ui/core";
import Logo from "../Logo";
import {useSubmit} from './UseSubmit';

function LoginForm() {

    const {handleLogginChange, handlePasswordChange, handleSubmit} = useSubmit();

    const useStyles = makeStyles(theme => ({
        root: {
            [theme.breakpoints.up('md')]: {
                width: '30%',
                margin: 'auto',
            },
            width: '100%',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            margin: '50% 5px',
        },
        button: {
            margin: theme.spacing(3, 10),
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },

    }));

    const classes = useStyles();

    return (
        <div id={"main"} className={classes.root}>
            <form className={classes.container} onSubmit={handleSubmit}>
                <Logo/>
                <TextField
                    id="login"
                    label="Login"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    variant="outlined"
                    onChange={handleLogginChange}
                />
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                    variant="outlined"
                    onChange={handlePasswordChange}
                />
                <Fab variant="extended" size="small" type={'submit'} color="primary" aria-label="delete"
                     className={classes.button}>
                    Connect
                </Fab>
            </form>
        </div>
    );
}

export default LoginForm;
