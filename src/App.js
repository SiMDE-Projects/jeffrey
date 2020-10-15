import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Accueil from './pages/accueil.js';
import Commander from './pages/commande.js';
import Suivi from './pages/suivi.js';
import ScreenTitle from './components/header/screenTitle.js';

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading</div>}>
					<Switch>
						<Route path="/" exact component={Accueil}/>
					</Switch>
				</React.Suspense>
    </BrowserRouter>
  );
}

export default App;
