import React from 'react';
import logo from './img/logo.jpg';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
        logo: {
            display: 'block',
            width: '30%',
            margin: '0 auto',
        },

    }))
;

function Logo() {
    const classes = useStyles();
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" className={classes.logo}/>;
}

export default Logo;
