import React from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Fab} from "@material-ui/core";
import Logo from "../Logo";
import axios from 'axios';

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



function LoginForm() {

    const classes = useStyles();

    const handleClick = function () {

        let token = "";
        axios.post('https://localhost:8443/authenticate',
            {
                username:"toto",
                password:"tata",
                timeout: 1000,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(function (response) {

                console.log(response.data.token);
                token = response.data.token;
                // handle success
                axios.get('https://localhost:8443/test',
                    {
                        timeout: 1000,
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        },
                    })
                    .then(function (response) {
                        // handle success
                        console.log('GET MESSAGE : '+ response.data);
                    });
            });



    };


    return (
        <div id={"main"} className={classes.root}>
            <form className={classes.container}>
                <Logo/>
                <TextField
                    id="login"
                    label="Login"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                    variant="outlined"
                />
                <Fab variant="extended" size="small" color="primary" aria-label="delete" className={classes.button}
                     onClick={handleClick}>
                    Connect
                </Fab>
            </form>
        </div>
    );
}

export default LoginForm;
