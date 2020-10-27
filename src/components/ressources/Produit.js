import React, { useContext } from 'react';
import TotalContext from '../../context/total-context';
import './css/item.css';

const Produit = ({ prix }) => {
    const { total, handleTotal } = useContext(TotalContext);

    return <div className="produit" onClick={() => handleTotal(prix)}></div>;
};

export default Produit;
