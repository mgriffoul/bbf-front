import React from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Fab from "@material-ui/core/Fab";
import Logo from "../Logo";

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
        margin : theme.spacing(3, 10) ,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },

}));

const handleClick = function(){
    alert('Ok');
};

function LoginForm() {
    const classes = useStyles();

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
                <Fab variant="extended" size="small" color="primary" aria-label="delete" className={classes.button} onClick={handleClick}>
                    Connect
                </Fab>
            </form>
        </div>
    );
}

export default LoginForm;
