import React from 'react';

import Produit from './produit';
import './css/item.css';

const Right_Content = ({produits}) => (
  <div className='Right_content'>
    <div className='Product_list_Left'>
    {produits.map((item,i) => i % 3 == 0 ? <Produit/> : <div></div>)}
    </div>
    <div className='Product_list_Middle'>
    {produits.map((item,i) => i % 3 == 1 ? <Produit/> : <div></div>)}
    </div>
    <div className='Product_list_Right'>
    {produits.map((item,i) => i % 3 == 2 ? <Produit/> : <div></div>)}
    </div>
  </div>
)

export default Right_Content;
