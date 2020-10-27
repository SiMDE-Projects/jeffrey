import React from "react";

import Produit from "@components/ressources/Produit.js";
import "./css/item.css";

const RightContent = ({ produits }) => (
  <div className="rightContent">
    <div className="productListLeft">
      {produits.map((item, i) =>
        i % 3 === 0 ? <Produit key={item.id} prix={item.prix} /> : null
      )}
    </div>
    <div className="productListMiddle">
      {produits.map((item, i) =>
        i % 3 === 1 ? <Produit key={item.id} prix={item.prix} /> : null
      )}
    </div>
    <div className="productListRight">
      {produits.map((item, i) =>
        i % 3 === 2 ? <Produit key={item.id} prix={item.prix} /> : null
      )}
    </div>
  </div>
);

export default RightContent;
