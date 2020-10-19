import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Accueil from './pages/accueil.js';
import Commander from './pages/commande.js';
import Suivi from './pages/suivi.js';

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading</div>}>
          <Switch>
              <Route path="/" exact component={Accueil}/>
              <Route path="/commander" exact component={Commander}/>
              <Route path="/suivre" exact component={Suivi}/>
          </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
