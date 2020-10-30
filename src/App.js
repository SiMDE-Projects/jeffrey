import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import './App.css';
import Accueil from 'pages/accueil/accueil';
import Commande from 'pages/commander/commande';
import Suivi from 'pages/suivre/suivi';
import TotalContext from 'context/total-context';

function App({ t }) {
    const [order, setOrder] = useState([]);

    function handleOrder(id, prix) {
        const tmp = Object.assign([],order);
        const index = tmp.findIndex(item => item.id === id);
        if (index !== -1){
          tmp[index].count += 1;
        }
        else {
          tmp.push({ id: id, prix: prix, count: 1 });
        }
        setOrder(tmp);
    }

    return (
        <BrowserRouter>
            <React.Suspense fallback={<div>{t('loading')}</div>}>
                <Switch>
                    <TotalContext.Provider value={{ order, handleOrder }}>
                        <Route path="/" exact component={Accueil} />
                        <Route path="/order" exact component={Commande} />
                        <Route path="/track" exact component={Suivi} />
                    </TotalContext.Provider>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default withNamespaces()(process.env.NODE_ENV === 'development' ? hot(App) : App);
