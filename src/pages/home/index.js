import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './accueil.css';

export default function() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (username !== '' && password !== '') {
            axios.post('https://jeffrey.aguyot.fr/auth/login', {
                'username': `${username}`,
                'password': `${password}`
            })
            .then((res) => {
              console.log(res.data)
            })
            .catch((error) => {
              console.error(error)
            })
        }
    }

    return (
        <div className="mainContainerHome">
            <div className="homeBackground">
                <h1>JEFFREY</h1>
            </div>
            <div className="homeTitle"></div>
            <div className="bodyContainerHome">
                <Form>
                    <Form.Input icon="user" iconPosition="left" label="Username - CAS" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                    <Form.Input icon="lock" iconPosition="left" label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <input type='submit' className="login"  value="LOGIN" onClick={() => handleSubmit()}/>
                </Form>
            </div>
        </div>
    );
}
