import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './settings.css';

export default function() {
    let history = useHistory();

    return (
        <div className="headerContainer">
            <div className="goBack">
                <Icon name="angle left" size="big" onClick={() => history.goBack()} />
            </div>
            <div className="title">
                <h1>MES INFOS</h1>
            </div>
            <hr />
        </div>
    );
}
