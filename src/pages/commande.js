import React, { useState } from 'react';

import './css/commande.css';

import Header from '../components/header/header';
import Bottom from '../components/bottom-tab-bar/bottom-tab-bar';

function Commande() {
    const [total, setTotal] = useState(0);

  return (
    <div className="Main_container">
      <Header title='Commander'/>
      <div className="Body_container">
        
      </div>
      <Bottom total={total}/>
    </div>
  );
}

export default Commande;
