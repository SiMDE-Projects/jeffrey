import React, { useState } from 'react';
import './suivi.css';
import { withNamespaces } from 'react-i18next';
import { Progress, Button } from 'semantic-ui-react';
import Header from '@components/header/header';
import Bottom from '@components/bottom-tab-bar/bottom-tab-bar';
import OrderItem from '@components/ressources/OrderItem';

function Suivi({ t }) {
  const [percent,setPercent] = useState(20);

  const etat = ['Envoyée','Validée','En préparation','En attente de récupération','Récuperée'];

  function increment() {
    {percent >= 100 ? setPercent(20) : setPercent(percent+20)}
  }

  return (
    <div className="Main_container">
      <Header title={t('TRACK')} />
      <div className="Body_container">
      <OrderItem percent={40} etat='En attente de récupération...'/>
      </div>
      <Bottom indexActive={1} />

    </div>
  );
}

export default withNamespaces()(Suivi);
