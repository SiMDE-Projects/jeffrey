import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import "./App.css";
import Accueil from "./pages/accueil.js";
import Commande from "./pages/commande.js";
import Suivi from "./pages/suivi.js";

function App({ t }) {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>{t("loading")}</div>}>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/commande" exact component={Commande} />
          <Route path="/suivre" exact component={Suivi} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default withNamespaces()(App);
