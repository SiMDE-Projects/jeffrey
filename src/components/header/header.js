import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './header.css';

const Header = ({ title }) => (
    <div className="headerContainer">
        <Link className="logout" to="/">
            <Icon name="log out" size="big" />
        </Link>
        <div className='title'>
            <h1>{title}</h1>
        </div>
        <Link className="settings" to="/">
            <Icon className="setting" name="setting" size="big" />
        </Link>
        <hr />
    </div>
);

export default Header;
