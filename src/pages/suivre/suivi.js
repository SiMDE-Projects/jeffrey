import React from 'react';
import './suivi.css';
import data from 'assets/data.json';
import { withNamespaces } from 'react-i18next';
import Header from 'components/header/header';
import Bottom from 'components/bottom-tab-bar/bottom-tab-bar';
import OrderItem from 'components/ressources/OrderItem';

const order_data = data.Order;

function Suivi({ t }) {
    console.log(order_data);
    return (
        <div className="mainContainer">
            <Header title={t('track').toUpperCase()} />
            <div className="bodyContainer">
              {order_data.map( item =>
                <OrderItem percent={item.percent} num={item.id} etat={item.etat} />
              )}
            </div>
            <Bottom />
        </div>
    );
}

export default withNamespaces()(Suivi);
