import React from 'react';
import { withNamespaces } from 'react-i18next';
import Header from '@components/header/header';

function Suivi({ t }) {
  return (
    <div className="App">
      <Header title={t('track')} />
      <div className="App-body" />
    </div>
  );
}

export default withNamespaces()(Suivi);
