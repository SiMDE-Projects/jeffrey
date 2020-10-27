import React from 'react';
import { Progress } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import './css/item.css';

const OrderItem = ({ t, num, percent, etat }) => {

  return(
  <div className='orderItem'>
    <h3>{t('order n°')} {num}</h3>
    <Progress className='progressBar' percent={percent} size='tiny' indicating/>
    <h3>{t(etat)}</h3>
  </div>
)
}

export default withNamespaces()(OrderItem);
