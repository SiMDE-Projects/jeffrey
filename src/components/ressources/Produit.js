import React, { useContext, useState } from 'react';
import TotalContext from "../../context/total-context";
import './css/item.css';

const Produit = ({ prix, titre, id }) => {
  const { handleTotal, handleOrder, order } = useContext(TotalContext);

  const value = order.find(x => x.id === id);

  return(
    <div className='productContainer'>
      <h3>{titre}</h3>
      <div className='produit' onClick={() => {handleTotal(prix) ; handleOrder(id)}}>
        <h1>{value !== undefined ? value.count : 0 }</h1>
      </div>
    </div>
  )
}

export default Produit;
