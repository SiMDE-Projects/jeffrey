import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import data from 'assets/data.json';
import { Icon } from 'semantic-ui-react';
import './details.css';
import { withNamespaces } from 'react-i18next';

const details_data = data.orderDetails;

function Details({ t }) {
    let history = useHistory();

    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const id = query.get("id");
    const found = details_data.find(item => item.id === id);

    return (
        <div className='mainContainerDetails'>
          <div className='headerContainer'>
            <div className='goBack'>
              <Icon name="angle left" size="big" onClick={() => history.goBack()} />
            </div>
            <div>
              <h1>
               N°{id}
              </h1>
            </div>
          </div>
          <div className='bodyContainerDetails'>
          {found ?
            <div className='detailsContainer'>
            {found.details.map( item =>
              <div className='detailsLine'>
                <div className='detailsText'>
                  <div><h3>{item.count}</h3></div>
                  <div>{item.name}</div>
                  <div><h3>{(item.count * item.prix).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</h3></div>
                </div>
                <hr/>
              </div>
            )}
              <div className='detailsTotal'>
                <div><h3>Total</h3></div>
                <div><h3>
                {found.details.reduce(
                  function(acc, cur){
                    return(acc + cur.count * cur.prix)
                  }, 0
                ).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </h3>
                </div>
              </div>
            </div>
            :
            <div>
              Erreur
            </div>
          }
          </div>
        </div>
    );
}

export default withNamespaces()(Details);
