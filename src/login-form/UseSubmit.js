import React, {useState} from 'react';
import axios from "axios";

export const useSubmit = () => {

    const [username, setLoggin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogginChange = (e) => {
        console.log(e.target.value);
        setLoggin(e.target.value)
    };
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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

    return {handleLogginChange, handlePasswordChange, handleSubmit};
};

