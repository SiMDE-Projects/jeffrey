import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import Accueil from 'pages/accueil/accueil';
import Commande from 'pages/commander/commande';
import Suivi from 'pages/suivre/suivi';
import Details from 'pages/details/Details';
import TotalContext from 'context/total-context';

function App() {
    const [order, setOrder] = useState([]);
    const { t } = useTranslation();

    function handleOrder(id, prix) {
        const tmp = Object.assign([], order);
        const found = tmp.find(item => item.id === id);
        if (found) {
            found.count += 1;
        } else {
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
                        <Route path="/orderDetails" exact component={Details} />
                    </TotalContext.Provider>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
