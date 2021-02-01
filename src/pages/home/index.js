import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import './accueil.css';
import queryString from 'query-string';

export default function() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const service = 'https://assos.utc.fr/jeffrey';
    const history = useHistory();

    const login = () => {
      let path = '/order';
      history.push(path);
    }

    function getTicketGrantingTicket(username, password, service) {
      axios({
        url: "https://cors-anywhere.herokuapp.com/https://cas.utc.fr/cas/v1/tickets/",
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          Accept: "text/plain",
        },
        data: queryString.stringify({ username, password })
      })
      .then(function(res) {
        getServiceTicket(username, password, service, res.data)
      })
      .catch(function(error) {
        console.log(error)
      })
    }

    function getServiceTicket(username, password, service, ticketGrantingTicket) {
      axios({
        url: "https://cors-anywhere.herokuapp.com/https://cas.utc.fr/cas/v1/tickets/" + ticketGrantingTicket + "",
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          Accept: "text/plain",
        },
        data: queryString.stringify({ username, password, service })
      })
      .then(function(res) {
        console.log(res.data)
        login()
      })
      .catch(function(error) {
        console.log(error)
      })
    }

    const handleSubmit = () => {
      getTicketGrantingTicket(username, password, service);
    }

    return (
        <div className="mainContainerHome">
            <div className="homeBackground">
                <h1>JEFFREY</h1>
            </div>
            <div className="homeTitle"></div>
            <div className="bodyContainerHome">
                <Form className='formContainer'>
                    <Form.Input icon="user" iconPosition="left" label="Username - CAS" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                    <Form.Input icon="lock" iconPosition="left" label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <input type='submit' className="login"  value="LOGIN" onClick={() => handleSubmit()}/>
                </Form>
            </div>
        </div>
    );
}
