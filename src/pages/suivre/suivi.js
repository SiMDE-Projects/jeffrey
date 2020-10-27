import React from 'react';
import './suivi.css';
import { withNamespaces } from 'react-i18next';
import Header from '@components/header/header';
import Bottom from '@components/bottom-tab-bar/bottom-tab-bar';
import OrderItem from '@components/ressources/OrderItem';

function Suivi({ t }) {
  return (
    <div className="mainContainer">
      <Header title={t('track').toUpperCase()} />
      <div className="bodyContainer">
      <OrderItem percent={40} etat='En attente de récupération...'/>
      </div>
      <Bottom />

    </div>
  );
}

export default withNamespaces()(Suivi);
