import React from 'react';
import './details.css';
import { withNamespaces } from 'react-i18next';

function Details({ t }) {
    return (
        <div className='mainContainerDetails'>
          <div className='bodyContainerDetails'>
          </div>
        </div>
    );
}

export default withNamespaces()(Details);
