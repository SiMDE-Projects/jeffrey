import React, { useState } from 'react';
import { withNamespaces } from 'react-i18next';
import { Accordion } from 'semantic-ui-react';
import './commande.css';
import data from '@assets/data.json';
import Header from '@components/header/header';
import Bottom from '@components/bottom-tab-bar/bottom-tab-bar';
import LeftItem from '@components/ressources/LeftItem';
import RightItem from '@components/ressources/RightItem';
import LeftContent from '@components/ressources/LeftContent';
import RightContent from '@components/ressources/RightContent';
import TotalContext from '@context/total-context';

const product_data = data.Product;

function Commande({ t }) {
  const [total, setTotal] = useState(0);

  function handleTotal(prix) {
    setTotal(total+prix);
  }

  const rootPanels = product_data.map((item, i) => (i % 2 === 0
    ? {
      key: item.id,
      title: { content: <LeftItem title={item.title} />, icon: '' },
      content: { content: <LeftContent produits={item.details} /> },
    }
    : {
      key: item.id,
      title: { content: <RightItem title={item.title} />, icon: '' },
      content: { content: <RightContent produits={item.details} /> },
    }));

  return (
    <div className="mainContainer">
      <TotalContext.Provider value={{ total, handleTotal }}>
        <Header title={t('order').toUpperCase()} />
        <div className="bodyContainer">
          <Accordion defaultActiveIndex={-1} panels={rootPanels} />
        </div>
        <Bottom />
      </TotalContext.Provider>
    </div>
  );
}

export default withNamespaces()(Commande);
