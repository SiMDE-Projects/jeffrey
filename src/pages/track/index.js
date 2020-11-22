import React from 'react';
import './suivi.css';
import data from 'assets/data.json';
import { useTranslation } from 'react-i18next';
import Header from 'components/header/header';
import Bottom from 'components/bottom-tab-bar/bottom-tab-bar';
import OrderItem from 'components/ressources/OrderItem';

const order_data = data.Order;

function Suivi() {
    const { t } = useTranslation();

    return (
        <div className="mainContainerTrack">
            <Header title={t('track').toUpperCase()} />
            <div className="bodyContainerTrack">
                {order_data.map(item => (
                    <OrderItem key={item.id} percent={item.percent} num={item.id} etat={item.etat} />
                ))}
            </div>
            <Bottom />
        </div>
    );
}

export default Suivi;
