import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './settings.css';
import { withNamespaces } from 'react-i18next';

function Settings({ t }) {
    let history = useHistory();

    return(
      <div className="headerContainer">
          <div className='goBack'>
            <Icon name="angle left" size="big" onClick={() => history.goBack()} />
          </div>
          <div>
              <h1>MES INFOS</h1>
          </div>
          <hr />
      </div>
    )
}

export default withNamespaces()(Settings);
