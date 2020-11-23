import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import data from 'assets/data.json';
import { Progress, Icon } from 'semantic-ui-react';
import './details.css';
import { useTranslation } from 'react-i18next';

const details_data = data.orderDetails;

function Details() {
    const history = useHistory();
    const { t } = useTranslation();

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const id = query.get('id');
    const found = details_data.find(item => item.id === id);

    return (
        <div className="mainContainerDetails">
            <div className="headerContainer">
                <div className="goBack">
                    <Icon name="angle left" size="big" onClick={() => history.goBack()} />
                </div>
                <div>
                    <h1>N°{id}</h1>
                </div>
                <hr />
            </div>
            <div className="bodyContainerDetails">
                {found ? (
                    <div className="detailsContainer">
                        <h3>
                            {t('orderNumber')} {found.id}
                        </h3>
                        <h4>{t(found.etat)}</h4>
                        <Progress className="progressBar" percent={found.percent} size="tiny" indicating />
                        {found.details.map(item => (
                            <div className="detailsLine" key={item.id}>
                                <div className="detailsText">
                                    <div>
                                        <h3>{item.count}</h3>
                                    </div>
                                    <div>
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div>
                                        <h3>{(item.count * item.prix).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</h3>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                        <div className="detailsTotal">
                            <div>
                                <h3>{t('total')}</h3>
                            </div>
                            <div>
                                <h3>
                                    {found.details
                                        .reduce(function(acc, cur) {
                                            return acc + cur.count * cur.prix;
                                        }, 0)
                                        .toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                                </h3>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>{t('error')}</div>
                )}
                <div className="buttonDelete">
                    <div className="deleteButton">
                        <h2>{t('delete')}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
