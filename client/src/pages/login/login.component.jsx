import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';

import useStyles from "./login.styles";

const Login = () => {
    const history = useHistory()
    const classes = useStyles();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // could be done better using a protected route
    const logged = localStorage.getItem('isLogged');

    useEffect(() => {
        if (logged === "logged") {
            history.push("/search")
        }
    }, [history, logged]);

    const onSubmit = async (credintials) => {
        const { data } = await axios.post("http://localhost:5000/login", credintials)
        if (data) {
            localStorage.setItem("isLogged", "logged");
            history.push("/search")
        }
    }
    
    return (
        <div className={classes.loginPage}>
            <Typography variant="h1" color="primary">Login</Typography>
            <Typography variant="body2" color="primary">username: rony</Typography>
            <Typography variant="body2" color="primary">pass: 1234</Typography>
            <div className={classes.form}>
                <TextField 
                    id="username" 
                    label="username" 
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    className={classes.textField}
                    InputProps={{
                        className: classes.input
                    }}
                />
                <TextField 
                    id="password" 
                    label="password" 
                    variant="outlined"
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.textField}
                    InputProps={{
                        className: classes.input
                    }}
                />
                <Button 
                    onClick={() => onSubmit({username, password})} 
                    variant="contained" 
                    color="primary"
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Login
