import React from 'react';
import './suivi.css';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from 'components/header/header';
import Bottom from 'components/bottom-tab-bar/bottom-tab-bar';
import OrderItem from 'components/ressources/OrderItem';

function Suivi({ t }) {
    return (
        <Link to='/orderDetails' className="mainContainer">
            <Header title={t('track').toUpperCase()} />
            <div className="bodyContainer">
                <OrderItem percent={40} num={1245} etat="En attente de récupération..." />
            </div>
            <Bottom />
        </Link>
    );
}

export default withNamespaces()(Suivi);
