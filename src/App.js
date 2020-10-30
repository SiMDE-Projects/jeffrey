import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import './App.css';
import Accueil from 'pages/accueil/accueil.js';
import Commande from 'pages/commander/commande.js';
import Suivi from 'pages/suivre/suivi.js';
import Details from 'pages/details/Details.js';

function App({ t }) {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<div>{t('loading')}</div>}>
                <Switch>
                    <Route path="/" exact component={Accueil} />
                    <Route path="/order" exact component={Commande} />
                    <Route path="/track" exact component={Suivi} />
                    <Route path="/orderDetails" exact component={Details} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default withNamespaces()(process.env.NODE_ENV === 'development' ? hot(App) : App);
