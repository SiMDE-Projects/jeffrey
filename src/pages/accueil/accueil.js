import React from 'react';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './accueil.css';

function Accueil() {
    return (
        <div className="mainContainerHome">
            <div className="homeBackground">
                <h1>JEFFREY</h1>
            </div>
            <div className="homeTitle"></div>
            <div className="bodyContainerHome">
                <Form>
                    <Form.Input icon="user" iconPosition="left" label="Username - CAS" placeholder="Username" />
                    <Form.Input icon="lock" iconPosition="left" label="Password" type="password" />
                </Form>
                <Link to="/order">
                    <div className="login">
                        <h2>LOGIN</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Accueil;
