import React, { useState } from 'react';
import './css/suivi.css';
import { withNamespaces } from 'react-i18next';
import { Progress, Button } from 'semantic-ui-react';
import Header from '@components/header/header';

function Suivi({ t }) {
  const [percent,setPercent] = useState(20);

  const etat = ['Envoyée','Validée','En préparation','En attente de récupération','Récuperée'];

  function increment() {
    {percent >= 100 ? setPercent(20) : setPercent(percent+20)}
  }

  return (
    <div className="Main_container">
      <Header title={t('track')} />
      <div className="Body_container">
      <div className="step">
      <h2>Commande n°x</h2>
      <h3>{etat[percent/20-1]}</h3>
      <Progress percent={percent} indicating/>
      <Button onClick={increment}>Increment</Button>
      </div>
      </div>

    </div>
  );
}

export default withNamespaces()(Suivi);
