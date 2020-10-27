import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import "./App.css";
import Accueil from "@pages/accueil/accueil.js";
import Commande from "@pages/commander/commande.js";
import Suivi from "@pages/suivre/suivi.js";
import TotalContext from '@context/total-context';

function App({ t }) {
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [order, setOrder] = useState([]);

  function handleOrder(id) {
    const tmp = order;
    var arret = true;
    order.map((item,i) => {
      if (item.id === id){
        item.count += 1;
        arret = false;
      }
    })
    if (arret){
      tmp.push({"id":id, "count":1});
    }
    setOrder(tmp);
  };

  function handleTotal(prix) {
    setTotal(total+prix);
    setCount(count+1);
  };

  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>{t("loading")}</div>}>
        <Switch>
          <TotalContext.Provider value={{ count, total, order, handleOrder, handleTotal }}>
            <Route path="/" exact component={Accueil} />
            <Route path="/order" exact component={Commande} />
            <Route path="/track" exact component={Suivi} />
          </TotalContext.Provider>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default withNamespaces()(
  process.env.NODE_ENV === "development" ? hot(App) : App
);
