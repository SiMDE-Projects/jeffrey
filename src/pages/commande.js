import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { Accordion } from "semantic-ui-react";
import "./css/commande.css";
import data from "../assets/data.json";
import Header from "../components/header/header";
import Bottom from "../components/bottom-tab-bar/bottom-tab-bar";
import LeftItem from "../components/ressources/LeftItem";
import RightItem from "../components/ressources/RightItem";
import LeftContent from "../components/ressources/LeftContent";
import RightContent from "../components/ressources/RightContent";

const product_data = data.Product;

const rootPanels = product_data.map((item, i) =>
  i % 2 === 0
    ? {
        key: { i },
        title: { content: <LeftItem title={item.title} />, icon: "" },
        content: { content: <LeftContent produits={item.details} /> }
      }
    : {
        key: { i },
        title: { content: <RightItem title={item.title} />, icon: "" },
        content: { content: <RightContent produits={item.details} /> }
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
