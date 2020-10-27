import React from 'react';
import { Progress } from 'semantic-ui-react'
import './css/item.css';

const OrderItem = ({ num, percent, etat }) => (
  <div className='order_item'>
    <h3>Commande n° {num}</h3>
    <Progress className='progress_bar' percent={percent} size='tiny' indicating/>
    <h3>{etat}</h3>
  </div>
)

export default OrderItem;
