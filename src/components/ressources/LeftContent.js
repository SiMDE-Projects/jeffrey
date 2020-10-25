import React from "react";

import Produit from "@components/ressources/Produit";
import "./css/item.css";

const LeftContent = ({ produits, changeTotal }) => (
  <div className="Left_content">
    <div className="Product_list_Left">
      {produits.map((item, i) =>
        i % 3 === 0 ? <Produit key={item.id} prix={item.prix} /> : null
      )}
    </div>
    <div className="Product_list_Middle">
      {produits.map((item, i) =>
        i % 3 === 1 ? <Produit key={item.id} prix={item.prix} /> : null
      )}
    </div>
    <div className="Product_list_Right">
      {produits.map((item, i) =>
        i % 3 === 2 ? <Produit key={item.id} prix={item.prix} /> : null
      )}
    </div>
  </div>
);

export default LeftContent;
