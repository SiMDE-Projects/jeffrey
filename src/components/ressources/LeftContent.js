import React from 'react';

import Produit from 'components/ressources/Produit.js';
import './css/item.css';

const LeftContent = ({ produits, changeTotal }) => (
    <div className="leftContent">
        <div className="productListLeft">{produits.map((item, i) => (i % 3 === 0 ? <Produit key={item.id} titre={item.title} prix={item.prix} id={item.id} /> : null))}</div>
        <div className="productListMiddle">{produits.map((item, i) => (i % 3 === 1 ? <Produit key={item.id} titre={item.title} prix={item.prix} id={item.id} /> : null))}</div>
        <div className="productListRight">{produits.map((item, i) => (i % 3 === 2 ? <Produit key={item.id} titre={item.title} prix={item.prix} id={item.id} /> : null))}</div>
    </div>
);

export default LeftContent;
