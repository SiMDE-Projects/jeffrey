import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { Accordion } from "semantic-ui-react";
import "./css/commande.css";
import data from "../assets/data.json";
import Header from "../components/header/header";
import Bottom from "../components/bottom-tab-bar/bottom-tab-bar";
import Left_Item from "../components/ressources/left_item";
import Right_Item from "../components/ressources/right_item";
import Left_Content from "../components/ressources/left_content";
import Right_Content from "../components/ressources/right_content";

const product_data = data.Product;

const rootPanels = product_data.map((item, i) =>
  i % 2 === 0
    ? {
        key: { i },
        title: { content: <Left_Item title={item.title} />, icon: "" },
        content: { content: <Left_Content produits={item.details} /> }
      }
    : {
        key: { i },
        title: { content: <Right_Item title={item.title} />, icon: "" },
        content: { content: <Right_Content produits={item.details} /> }
      }
);

function Commande({ t }) {
  const [total, setTotal] = useState(0);

  return (
    <div className="Main_container">
      <Header title={t("buy")} />
      <div className="Body_container">
        <Accordion defaultActiveIndex={-1} panels={rootPanels} />
      </div>
      <Bottom total={total} />
    </div>
  );
}

export default withNamespaces()(Commande);
