import React, {useState} from 'react';
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

    const [loggingState, setLoggingState] = useState("");

    const [username, setLoggin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogginChange = (e) => {
        console.log(e.target.value);
        setLoggin(e.target.value)
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    const classes = useStyles();

    const handleSubmit = function (e) {
        e.preventDefault();
        setLoggingState("logging");
        let token = "";
        axios.post('https://localhost:8443/authenticate',
            {
                username,
                password,
                timeout: 1000,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(function (response) {
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
                    .then(function (response2) {
                        // handle success
                        console.log('GET MESSAGE : ' + response2.data);
                    });
            });
    };

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

                {loggingState}
            </form>
        </div>
    );
}

export default LoginForm;
