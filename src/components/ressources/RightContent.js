import React from 'react';

import Produit from 'components/ressources/Produit.js';
import './css/item.css';

const RightContent = ({ produits }) => (
    <div className="rightContent">
      <div className="productList">{produits.map((item, i) => (<Produit key={item.id} titre={item.title} prix={item.prix} id={item.id} /> : null))}</div>
    </div>
);

export default RightContent;
