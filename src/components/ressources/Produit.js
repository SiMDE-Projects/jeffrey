import React, { useContext, useState } from 'react';
import TotalContext from "../../context/total-context";
import './css/item.css';

const Produit = ({ prix, titre }) => {
  const [nombre,setNombre] = useState(0)

  const { handleTotal } = useContext(TotalContext);

  return(
    <div className='productContainer'>
      <h3>{titre}</h3>
      <div className='produit' onClick={() => {handleTotal(prix) ; setNombre(nombre+1)}}>
        <h1>{nombre}</h1>
      </div>
    </div>
  )
}

export default Produit;
