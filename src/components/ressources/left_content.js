import React from 'react';

import Produit from './produit';
import './css/item.css';

const Left_Content = ({produits}) => (
  <div className='Left_content'>
  {produits.map((item,i) => <Produit/>)}
  </div>
)

export default Left_Content;
