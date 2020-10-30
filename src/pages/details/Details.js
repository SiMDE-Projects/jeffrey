import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './details.css';
import { withNamespaces } from 'react-i18next';

function Details({ t }) {
    let history = useHistory();

    return (
        <div className='mainContainerDetails'>
          <div className='goBack'>
            <Icon name="angle left" size="big" onClick={() => history.goBack()} />
          </div>
          <div className='bodyContainerDetails'>
          </div>
        </div>
    );
}

export default withNamespaces()(Details);
