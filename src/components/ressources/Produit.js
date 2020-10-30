import React, { useContext } from 'react';
import TotalContext from 'context/total-context';
import './css/item.css';

export default function({ prix, titre, id }) {
    const { handleOrder, order } = useContext(TotalContext);

    const value = order.find(x => x.id === id);

    return (
        <div className="productContainer">
            <h3>{titre}</h3>
            <div
                className="produit"
                onClick={() => {
                    handleOrder(id, prix);
                }}
            >
                <h1>{value ? value.count : null}</h1>
            </div>
        </div>
    );
}
