import React from 'react';

import Produit from './produit';
import './css/item.css';

const Right_Content = ({produits}) => (
  <div className='Right_content'>
  {produits.map((item,i) => <Produit/>)}
  </div>
)

export default Right_Content;
